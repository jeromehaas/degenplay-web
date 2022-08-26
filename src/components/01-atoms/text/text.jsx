const Text = ({ children, className }) => {

	return (
		<p className={ `${className ? className : ''} text`}>{ children }</p>
	);

};

export default Text;