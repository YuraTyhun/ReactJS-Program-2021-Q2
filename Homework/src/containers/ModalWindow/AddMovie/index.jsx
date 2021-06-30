import React from 'react';
import { Formik, Form } from 'formik';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import MovieForm from '../../MovieForm';

const AddMovie = ({ modalTitle }) => {
    const activeModal = useSelector((state) => state.movie.activeModal);

    const initialValues = {
        title: '',
        releaseDate: '',
        posterUrl: '',
        genres: [],
        overview: '',
        runtime: null
    };

    const submitForm = (values) => {
        console.log(values);
    }

    return activeModal === 'add' && (
        <Formik initialValues={initialValues} onSubmit={submitForm}>
            {(formik) => (
                <Form>
                    <h1 className="modal-window-title">{modalTitle}</h1>
                    <MovieForm formik={formik} />
                </Form>
            )}
        </Formik>
    )
}

AddMovie.propTypes = {
    modalTitle: PropTypes.string.isRequired,
};

export default AddMovie;