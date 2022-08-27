const Link = ({ children, className, href }) => {

	return (
		<a className={ `${className} link`} href={ href ? href : '#'}>{ children }</a>
	);

};

export default Link;