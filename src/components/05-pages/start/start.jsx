import Logo from "components/01-atoms/logo/logo";
import Text from "components/01-atoms/text/text";
import Button from "components/01-atoms/button/button";

const Start = () => {

	return (
		<div className="start">
			<Logo />
			<Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a diam ultrices, ullamcorper purus non, tristique mi. Donec at mi scelerisque, imperdiet est eget, porttitor libero. Pellentesque imperdiet euismod ex.</Text>
			<Button>Start Now</Button>
		</div>
	);

};

export default Start;