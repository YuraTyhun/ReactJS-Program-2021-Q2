import React from 'react';
import { Formik, Form } from 'formik';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import MovieForm from '../../MovieForm';

const EditMovie = ({ modalTitle, movie: { id, title, releaseDate, posterUrl, genres, overview, runtime } }) => {

    const activeModal = useSelector((state) => state.movie.activeModal);

    const initialValues = {
        id,
        title,
        releaseDate,
        posterUrl,
        genres,
        overview,
        runtime
    };

    const submitForm = (values) => {
        console.log(values);
    }

    return activeModal === 'edit' && (
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

EditMovie.propTypes = {
    modalTitle: PropTypes.string.isRequired,
    movie: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        releaseDate: PropTypes.string,
        posterUrl: PropTypes.string,
        genres: PropTypes.arrayOf(PropTypes.string),
        overview: PropTypes.string,
        runtime: PropTypes.number
    }).isRequired
};

export default EditMovie;