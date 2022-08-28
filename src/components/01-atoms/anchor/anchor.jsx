import { Link } from "react-router-dom";

const Anchor = ({ children, className, href }) => {

	return (
		<Link className={ `${className} anchor`} to={ href ? href : '#'}>{ children }</Link>
	);

};

export default Anchor;