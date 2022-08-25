import Logo from "components/01-atoms/logo/logo";
import Text from "components/01-atoms/text/text";
import Button from "components/01-atoms/button/button";
import Link from "components/01-atoms/link/link";
import InputText from "components/07-form-elements/input-text/input-text";

const Start = () => {

	return (
		<div className="start">
			<Logo />
			<Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a diam ultrices, ullamcorper purus non, tristique mi. Donec at mi scelerisque, imperdiet est eget, porttitor libero. Pellentesque imperdiet euismod ex.</Text>
			<Button>Start Now</Button>
			<Link>Explore</Link>
			<InputText
				className="input"
				label="label"
				id="input"
				placeholder="placeholder"
				isRequired={ false }
			/>
		</div>
	);

};

export default Start;