import Logo from "components/01-atoms/logo/logo";
import { Link, useLocation } from 'react-router-dom';
import Button from 'components/01-atoms/button/button';
import { Player } from '@lottiefiles/react-lottie-player';
// import Lottie from '/lotties/hamburger.json';
import Lottie from 'lottie-web';
import { useRef, useEffect, useState } from 'react';

const MobileNavigation = () => {

	const [menuIsVisible, setMenuIsVisible] = useState(false);
	const location = useLocation();
	const container = useRef();
	const hamburger = useRef();

	const handleClick = () => {
		updateHamburger();
		setMenuIsVisible(!menuIsVisible);
	};
	
	const updateHamburger = () => {
		const lottie = hamburger.current;
		menuIsVisible ? lottie.setDirection(-1) : lottie.setDirection(1);
		lottie.play();
	};

	const createLottie = () => {
		hamburger.current = Lottie.loadAnimation({
			container: container.current,
			renderer: 'svg',
			loop: false,
			autoplay: false,
			path: '/lotties/hamburger.json'
		});
		hamburger.current.setSpeed(2.5);
	};

	useEffect(() => {
		createLottie();
		return () => hamburger.current.destroy(); 
	}, []);

	return (
			<nav className={ `mobile-navigation ${ menuIsVisible ? 'mobile-navigation--menu-is-visible' : ''} `} >

							<div className="mobile-navigation__cover"></div>

							<div className="mobile-navigation__bar bar section">
									<div className="bar__inner section__inner">
											<Link className="bar__logo-wrapper" to="/" >
												<Logo className="bar__logo" />
											</Link>
											<div className="bar__hamburger" ref={ container } onClick={ handleClick }></div>
											<Button className="bar__button button--with-status button--with-rainbow-border">Wallet</Button>
									</div>
							</div>

							<div className="mobile-navigation__placeholder"></div>
							
							<div className="mobile-navigation__menu menu">
								<div className="menu__links">
									<Link className="links__item anchor" onClick={ handleClick }to="/">Home</Link>
									<Link className="links__item anchor" onClick={ handleClick }to="/learn">Learn</Link>
									<Link className="links__item anchor" onClick={ handleClick }to="/create">Create</Link>
									<Link className="links__item anchor" onClick={ handleClick }to="/explore">Explore</Link>
									<Link className="links__item anchor" onClick={ handleClick }to="/audit">Audit</Link>
								</div>	
							</div>
							

			</nav>
	);


};

export default MobileNavigation;