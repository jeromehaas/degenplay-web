const Input = ({ className, label, placeholder, id, isRequired }) => {

	return (
		<div className="input-text">
			{ label && 
			<label className="input-text__label-wrapper" htmlFor={ id }>
				<span className="input-text__label input-text__label--left">{ label }</span> 
				{ isRequired === false &&	<span className="input-text__label input-text__label--right">(optional)</span> }
			</label> }
			<input className={`${className ? className : '' } input-text__field`} type="text" placeholder={ placeholder } id={ id } />
		</div>
	);

};

export default Input;