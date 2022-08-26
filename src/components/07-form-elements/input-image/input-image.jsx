import { useState, useEffect } from 'react';

const InputImage = ({ id, placeholder }) => {
	
	const [selectedFile, setSelectedFile] = useState()
	const [preview, setPreview] = useState()

	useEffect(() => {
		console.log(selectedFile);
		if (!selectedFile) return setPreview(undefined)
		const objectUrl = URL.createObjectURL(selectedFile)
		setPreview(objectUrl)
		return () => URL.revokeObjectURL(objectUrl)
	}, [selectedFile])

	const handleChange = event => {
		if (!event.target.files || event.target.files.length === 0) {
				setSelectedFile(undefined);
		} else {
			setSelectedFile(event.target.files[0])
		}

}

	return (
		<div className="input-image">
			<input className="input-image__field" id={id} type="file" onChange={ handleChange } />
			<label className="input-image__label" htmlFor={id}>{placeholder}</label>
			{ selectedFile &&  <img class="input-image__thumbnail" src={preview} alt="Thumbnail" /> }
		</div>
	)
};

export default InputImage;