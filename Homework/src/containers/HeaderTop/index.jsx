import React from 'react';

import './HeaderTop.scss';

import Button from '../../components/Button';
import Logo from '../../components/Logo';

const HeaderTop = () => (
    <div className='header-top-container'>
        <Logo />
        <Button className="add-movie-btn" title='+ ADD MOVIE' />
    </div>
);

export default HeaderTop;