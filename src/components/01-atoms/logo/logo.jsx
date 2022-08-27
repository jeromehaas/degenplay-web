import { Link } from 'react-router-dom';
import Rainbow from "components/01-atoms/rainbow/rainbow";

const Logo = ({ className }) => {

	return (
		<Link to="/">
			<p className={`${ className ? className : '' } logo `}>Degen<Rainbow>play</Rainbow></p>
		</Link>
	);

};

export default Logo;