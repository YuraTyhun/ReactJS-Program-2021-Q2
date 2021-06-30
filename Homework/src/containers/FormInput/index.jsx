import React from 'react';
import { Field } from 'formik';

const FormInput = ({label, name, type, placeholder}) => {
    return (
        <div className="form-input-container">
            <label htmlFor={name} className="form-input-label">{label}</label>
            <Field 
                className="form-input-field" 
                name={name} 
                type={type || 'text'}
                placeholder={placeholder || ''}/>
        </div>

    )
}

export default FormInput;

