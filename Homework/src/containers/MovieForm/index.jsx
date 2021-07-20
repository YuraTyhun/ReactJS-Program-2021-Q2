import React from 'react';
import PropTypes from 'prop-types';

import FormInput from '../FormInput';
import Button from '../../components/Button';
import MultipleSelect from '../../components/MultipleSelect';

import './MovieForm.scss';

const MovieForm = ({ formik, isEditMode }) => {
    return (
        <>
            {isEditMode && <FormInput label="MOVIE ID" name="id" isIdField readOnly/>}
            <FormInput label="TITLE" name="title" placeholder="Movie title here"/>
            <FormInput label="RELEASE DATE" name="release_date" type="date" placeholder="Select Date"/>
            <FormInput label="MOVIE URL" name="poster_path" placeholder="Movie URL here"/>
            <MultipleSelect label="GENRE" fieldName="genres" formik={formik}/>
            <FormInput label="OVERVIEW" name="overview" placeholder="Overview here"/>
            <FormInput label="RUNTIME" name="runtime" placeholder="Runtime here"/>
            <FormInput label="BUDGET" name="budget" placeholder="Budget here"/>
            <FormInput label="REVENUE" name="revenue" placeholder="Revenue here"/>
            <FormInput label="TAGLINE" name="tagline" placeholder="Tagline here"/>
            <FormInput label="VOTE AVERAGE" name="vote_average" placeholder="Vote average here"/>
            <FormInput label="VOTE COUNT" name="vote_count" placeholder="Vote count here"/>
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