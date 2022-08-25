const Button = ({ children }) => {

	return (
		<a className="button">
			{ children }
			<i className="button__icon icon icon--arrow"></i>
		</a>
	);

};

export default Button;