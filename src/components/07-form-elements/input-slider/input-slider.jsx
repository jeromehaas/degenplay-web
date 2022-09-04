import { useRef, useEffect } from 'react';

const InputSlider = ({ className, label, id, isRequired, onChange, value, min, max, field, valueAppendix }) => {


    return (
     <div className={` ${className ? className : '' } input-slider`}>
        { label && <span className="input-slider__label-wrapper">
            <label className="input-slider__label" htmlFor={ id }>{ label }</label>
           { isRequired === false && <p className="input-slider__label input-slider__label--right">(optional)</p>}
        </span> }
        <input className="input-slider__field" min={ min } max={ max } value={ value } id={ id } field={ field } type="range"  step="0.1" onChange={ onChange } />
        <p className="input-slider__value">{ value }{ valueAppendix ? valueAppendix : ''}</p>
     </div>
    );

};

export default InputSlider;