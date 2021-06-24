import React from 'react';

import './HeaderMain.scss';

import SearchMovie from '../SearchMovie';

const HeaderMain = () => (
  <div className="header-main-container">
    <h1 className="main-title">FIND YOUR MOVIE</h1>
    <SearchMovie />
  </div>
);

export default HeaderMain;
