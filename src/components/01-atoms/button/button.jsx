const Button = ({ children, className, href }) => {

	return (
		<a className={`${className ? className : className } button`} href={ href ? href : '' }>
			<i className="button__status icon icon--circle"></i>
			{ children }
			<i className="button__arrow icon icon--arrow"></i>
		</a>
	);

};

export default Button;