import React from 'react';

import FormInput from '../FormInput';
import Button from '../../components/Button';
import MultipleSelect from '../../components/MultipleSelect';

import './MovieForm.scss';

const MovieForm = ({ formik }) => {
    return (
        <>
            <FormInput label="MOVIE ID" name="id" />
            <FormInput label="TITLE" name="title" placeholder="Movie title here"/>
            <FormInput label="RELEASE DATE" name="releaseDate" type="date" placeholder="Select Date"/>
            <FormInput label="MOVIE URL" name="posterUrl" placeholder="Movie URL here"/>
            <MultipleSelect label="GENRE" fieldName="genres" formik={formik}/>
            <FormInput label="OVERVIEW" name="overview" placeholder="Overview here"/>
            <FormInput label="RUNTIME" name="runtime" placeholder="Runtime here"/>
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

export default MovieForm;