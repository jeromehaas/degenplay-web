import Logo from "components/01-atoms/logo/logo";
import Link from "components/01-atoms/link/link";
import Button from 'components/01-atoms/button/button';

const DesktopNavigation = () => {

    return (
        <div className="desktop-navigation">
            <div className="desktop-navigation__bar bar">
                <Logo className="bar__logo" />
                <div className="bar__links links">
                    <Link>Learn</Link>
                    <Link>Create</Link>
                    <Link>Explore</Link>
                    <Link>Audit</Link>
                </div>
                <Button className="bar__button button--with-status button--with-rainbow-border">Connect your wallet</Button>
            </div>
        </div>
    )
};

export default DesktopNavigation;