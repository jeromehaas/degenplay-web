import Logo from "components/01-atoms/logo/logo";
import Text from "components/01-atoms/text/text";
import Button from "components/01-atoms/button/button";
import Link from "components/01-atoms/link/link";
import InputText from "components/07-form-elements/input-text/input-text";
import InputImage from "components/07-form-elements/input-image/input-image";
import Accordion from "components/02-molecules/accordion/accordion";
import CoinCard from "components/02-molecules/coin-card/coin-card";
import TeaserBanner from "components/03-organisms/teaser-banner/teaser-banner";
import DesktopNavigation from "components/03-organisms/desktop-navigation/desktop-navitgation";
import Promotion from "components/03-organisms/promotion/promotion";
import Hero from "components/03-organisms/hero/hero";

const Start = () => {

	return (
		<div className="start">
			<TeaserBanner/>
			<DesktopNavigation />
			<Hero />
			<Promotion />
			{/* <Button>Start Now</Button> */}
			{/* <CoinCard /> */}
			{/* <Logo />
			<Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a diam ultrices, ullamcorper purus non, tristique mi. Donec at mi scelerisque, imperdiet est eget, porttitor libero. Pellentesque imperdiet euismod ex.</Text>
			<Link>Explore</Link>
			<InputText
				className=""
				label="label"
				id="input"
				placeholder="placeholder"
				isRequired={ false }
			/>
			<InputImage
				className=""
				id="image"
				placeholder="upload image"
			/> */}
			<Accordion />
		</div>
	);

};

export default Start;