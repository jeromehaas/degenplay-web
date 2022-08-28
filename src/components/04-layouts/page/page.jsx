import DesktopNavigation from "components/03-organisms/desktop-navigation/desktop-navitgation";
import MobileNavigation from "components/03-organisms/mobile-navigation/mobile-navigation";
import TeaserBanner from "components/03-organisms/teaser-banner/teaser-banner";
import Notifier from "components/03-organisms/notifier/notifier";

const Page = ({ className, children }) => {

	return (
		<div className={ `${className ? className : '' } page` }>
			<TeaserBanner />
			<DesktopNavigation />
			<MobileNavigation />
			{ children }
			<Notifier />
		</div>
	)
};

export default Page;