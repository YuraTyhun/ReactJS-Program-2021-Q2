import React from 'react';
import {useDispatch} from 'react-redux';

import Button from '../../components/Button';
import Logo from '../../components/Logo';
import { openModal } from '../../store/actions';

import './HeaderTop.scss';

const HeaderTop = () => {
    const dispatch = useDispatch();

    const showAddModal = () => {
        dispatch(openModal('add'));
    };

    return (
        <div className='header-top-container'>
            <Logo />
            <Button className="add-movie-btn" title='+ ADD MOVIE' onClick={showAddModal}/>
        </div>
    );
}

export default HeaderTop;