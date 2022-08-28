import { Link } from "react-router-dom";

const Button = ({ children, className, href }) => {

	return (
		<Link className={`${className ? className : className } button`} to={ href ? href : '' }>
			<i className="button__status icon icon--circle"></i>
			{ children }
			<i className="button__arrow icon icon--arrow"></i>
		</Link>
	);

};

export default Button;