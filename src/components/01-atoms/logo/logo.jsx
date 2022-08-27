import Rainbow from "components/01-atoms/rainbow/rainbow";

const Logo = ({ className }) => {

	return (
		<p className={`${ className ? className : '' } logo `}>Degen<Rainbow>play</Rainbow></p>
	);

};

export default Logo;