import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import { closeMovieDetails, openModal } from '../../store/actions';
import Button from '../../components/Button';
import Logo from '../../components/Logo';
import SearchIcon from '../../assets/images/search.svg';

import './HeaderTop.scss';

const HeaderTop = () => {
    const detailsMovie = useSelector(({movie: {detailsMovie}}) => detailsMovie);
    const dispatch = useDispatch();

    const handleShowAddModal = () => {
        dispatch(openModal('add'));
    };

    const handleCloseMovieDetails = () => {
        dispatch(closeMovieDetails());
    }

    return (
        <div className='header-top-container'>
            <Logo />
            {detailsMovie ? 
                (
                    <Button className="close-movie-details" onClick={handleCloseMovieDetails}>
                        <img src={SearchIcon} alt="search" />
                    </Button>
                ) : ( 
                    <Button className="add-movie-btn" title='+ ADD MOVIE' onClick={handleShowAddModal}/> 
                )
            }
        </div>
    );
}

export default HeaderTop;