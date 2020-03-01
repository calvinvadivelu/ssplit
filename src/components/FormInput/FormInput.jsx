import React from 'react';
import './FormInput.scss'

const FormInput = ({handleChange, label, id, name, type, width, ...otherProps}) => {
    return (
        <div className='group' style={width ? {width: width} : {}}>
            <input className='form-input' id={id} name={id} type={type} onChange={handleChange} {...otherProps}/>
            {
                label ? 
                <label className={`form-input-label ${otherProps.value.length ? 'shrink' : ''}`} htmlFor={id}>
                    {label}
                </label>
                :
                null
            }
        </div>
    );
};

export default FormInput;