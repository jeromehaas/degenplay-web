import TeaserBanner from "components/03-organisms/teaser-banner/teaser-banner";
import DesktopNavigation from "components/03-organisms/desktop-navigation/desktop-navitgation";
import Promotion from "components/03-organisms/promotion/promotion";
import Hero from "components/03-organisms/hero/hero";
import FAQ from "components/03-organisms/faq/faq";
import Newborns from "components/03-organisms/newborns/newborns";

const Start = () => {

	return (
		<div className="start">
			<TeaserBanner/>
			<DesktopNavigation />
			<Hero />
			<Promotion />
			<FAQ />
			<Newborns />
		</div>
	);

};

export default Start;