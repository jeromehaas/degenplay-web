import Logo from "components/01-atoms/logo/logo";
import { Link, useLocation } from 'react-router-dom';
import Button from 'components/01-atoms/button/button';

const DesktopNavigation = () => {

	const location = useLocation();
	const pathname = location.pathname;

    return (
        <nav className="desktop-navigation">

                <div className="desktop-navigation__cover"></div>

                <div className="desktop-navigation__bar bar section">
                    <div className="bar__inner section__inner">
												<Link className="bar__logo-wrapper" to="/">
                        	<Logo className="bar__logo" />
												</Link>
                        <div className="bar__links links">
                            <Link className={ `links__item anchor anchor--with-hover-effect ${ pathname === '/learn' ? 'anchor--is-active' : '' }` } to="/learn">Learn</Link>
                            <Link className={ `links__item anchor anchor--with-hover-effect ${ pathname === '/create' ? 'anchor--is-active' : '' }` } to="/create">Create</Link>
                            <Link className={ `links__item anchor anchor--with-hover-effect ${ pathname === '/explore' ? 'anchor--is-active' : '' }` } to="/explore">Explore</Link>
                            <Link className={ `links__item anchor anchor--with-hover-effect ${ pathname === '/audit' ? 'anchor--is-active' : '' }` } to="/audit">Audit</Link>
                        </div>
                        <Button className="bar__button button--with-status button--with-rainbow-border">Connect your wallet</Button>
                    </div>
                </div>
                
                <div className="desktop-navigation__placeholder"></div>

        </nav>
    )
};

export default DesktopNavigation;