import Logo from "components/01-atoms/logo/logo";
// import Link from "components/01-atoms/link/link";
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
                        <Logo className="bar__logo" />
                        <div className="bar__links links">
                            <Link className={ `links__item link link--with-hover-effect ${ pathname === '/learn' ? 'link--is-active' : '' }` } to="/learn">Learn</Link>
                            <Link className={ `links__item link link--with-hover-effect ${ pathname === '/create' ? 'link--is-active' : '' }` } to="/create">Create</Link>
                            <Link className={ `links__item link link--with-hover-effect ${ pathname === '/explore' ? 'link--is-active' : '' }` } to="/explore">Explore</Link>
                            <Link className={ `links__item link link--with-hover-effect ${ pathname === '/audit' ? 'link--is-active' : '' }` } to="/audit">Audit</Link>
                        </div>
                        <Button className="bar__button button--with-status button--with-rainbow-border">Connect your wallet</Button>
                    </div>
                </div>
                
                <div className="desktop-navigation__placeholder"></div>

        </nav>
    )
};

export default DesktopNavigation;