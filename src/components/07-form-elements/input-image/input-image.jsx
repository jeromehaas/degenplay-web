const InputImage = ({ id, placeholder, className, onChange, selectedFile }) => {
	
	return (
		<div className={` ${ className ? className : '' } input-image`}>
			<input className="input-image__field" id={ id } type="file" onChange={ onChange } accept="image/png, image/jpeg" />
			<label className="input-image__label" htmlFor={ id }>{ placeholder }</label>
			{ selectedFile &&  <img className="input-image__thumbnail" src={ selectedFile ? URL.createObjectURL(selectedFile) : '' } alt="Thumbnail" /> }
		</div>
	)
};

export default InputImage;