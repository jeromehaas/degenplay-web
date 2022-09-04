const InputText = ({ className, label, placeholder, id, isRequired, onChange, field, validation, errorText }) => {

	return (
		<div className={` ${className ? className : '' } input-text input-element `}>
			{ label && 
			<span className="input-text__label-wrapper">
				<label className="input-text__label input-text__label--left" htmlFor={ id }>{ label }</label> 
				{ isRequired === false &&	<span className="input-text__label input-text__label--right">(optional)</span> }
			</span> }
			<input className={`${ className ? className : '' } input-text__field`} type="text" placeholder={ placeholder } id={ id } onChange={ onChange } field={ field ? field : '' } is-required={ isRequired ? 1 : 0 } validation={ validation ? validation : '' } />
				{ errorText && <p className="input-text__error-text">{ errorText} </p> }
		</div>
	);

};

export default InputText;