import React from 'react';
import { Field } from 'formik';
import PropTypes from 'prop-types';

const FormInput = ({ label, name, type, placeholder }) => {
    return (
        <div className="form-input-container">
            <label htmlFor={name} className="form-input-label">{label}</label>
            <Field
                className="form-input-field"
                name={name}
                type={type}
                placeholder={placeholder} />
        </div>

    )
}

FormInput.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    placeholder: PropTypes.string
};

FormInput.defaultProps = {
    label: '',
    type: 'text',
    placeholder: '',
};

export default FormInput;

