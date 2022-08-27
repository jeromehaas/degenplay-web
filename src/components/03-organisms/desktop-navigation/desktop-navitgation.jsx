import Logo from "components/01-atoms/logo/logo";
import Link from "components/01-atoms/link/link";
import Button from 'components/01-atoms/button/button';

const DesktopNavigation = () => {

    return (
        <nav className="desktop-navigation">

                <div className="desktop-navigation__cover"></div>

                <div className="desktop-navigation__bar bar section">
                    <div className="bar__inner section__inner">
                        <Logo className="bar__logo" />
                        <div className="bar__links links">
                            <Link className="links__item link--with-hover-effect">Learn</Link>
                            <Link className="links__item link--with-hover-effect">Create</Link>
                            <Link className="links__item link--with-hover-effect">Explore</Link>
                            <Link className="links__item link--with-hover-effect">Audit</Link>
                        </div>
                        <Button className="bar__button button--with-status button--with-rainbow-border">Connect your wallet</Button>
                    </div>
                </div>
                
                <div className="desktop-navigation__placeholder"></div>

        </nav>
    )
};

export default DesktopNavigation;