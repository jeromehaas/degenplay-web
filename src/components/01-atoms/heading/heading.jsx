
const Heading = ({ children, className, level }) => {

	switch(level) {
		case 'h1': return <h1 className={` ${ className ? className : '' } heading heading--${ level }`}>{ children }</h1>
		case 'h2': return <h2 className={` ${ className ? className : '' } heading heading--${ level }`}>{ children }</h2>
		case 'h3': return <h3 className={` ${ className ? className : '' } heading heading--${ level }`}>{ children }</h3>
		case 'h4': return <h4 className={` ${ className ? className : '' } heading heading--${ level }`}>{ children }</h4>
		case 'h5': return <h5 className={` ${ className ? className : '' } heading heading--${ level }`}>{ children }</h5>
		default: return <h1 className={` ${ className ? className : '' } heading heading--${ level }`}>{ children }</h1>
	};

};

export default Heading;