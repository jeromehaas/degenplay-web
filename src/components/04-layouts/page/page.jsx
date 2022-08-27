import DesktopNavigation from "components/03-organisms/desktop-navigation/desktop-navitgation";
import TeaserBanner from "components/03-organisms/teaser-banner/teaser-banner";

const Page = ({ className, children }) => {

	return (
		<div className={ `${className ? className : '' } page` }>
			<TeaserBanner />
			<DesktopNavigation />
			{ children }
		</div>
	)
};

export default Page;