import React from 'react';
import PropTypes from 'prop-types';

import FormInput from '../FormInput';
import Button from '../../components/Button';
import MultipleSelect from '../../components/MultipleSelect';
import { formInputsList } from '../../util/constants';

import './MovieForm.scss';

const MovieForm = ({ formik, isEditMode }) => {
    return (
        <>
            {isEditMode && <FormInput label="MOVIE ID" name="id" isIdField readOnly/>}
            {formInputsList.map(input => {
                if(input.fieldName) {
                   return <MultipleSelect key={input.id} label={input.label} fieldName={input.fieldName} formik={formik}/>
                }
                return <FormInput key={input.id} label={input.label} name={input.name} type={input.type} placeholder={input.placeholder}/>
            })}
            <div className="modal-window-action">
                <Button
                    type="reset"
                    className="modal-window-action-btn"
                    title="RESET"
                />
                <Button
                    type="submit"
                    className="modal-window-action-btn"
                    title="SAVE"
                />
            </div>
        </>
    )
}

MovieForm.propTypes = {
    formik: PropTypes.instanceOf(Object).isRequired,
    isEditMode: PropTypes.bool
};
  
MovieForm.defaultProps = {
    isEditMode: false
};

export default MovieForm;