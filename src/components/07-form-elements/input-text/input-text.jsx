const Input = ({ className, label, placeholder, id, isRequired }) => {

	return (
		<div className="input">
			{ label && 
			<label className="input__label-wrapper" htmlFor={ id }>
				<span className="input__label input__label--left">{ label }</span> 
				{ isRequired === false &&	<span className="input__label input__label--right">(optional)</span> }
			</label> }
			<input className={`${className ? className : '' } input__field`} type="text" placeholder={ placeholder } id={ id } />
		</div>
	);

};

export default Input;