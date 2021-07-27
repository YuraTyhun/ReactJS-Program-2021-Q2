import React from 'react';

import SearchMovie from '../../containers/SearchMovie';

import './HeaderMain.scss';

const HeaderMain = () => (
  <div className="header-main-container">
    <h1 className="main-title">FIND YOUR MOVIE</h1>
    <SearchMovie />
  </div>
);

export default HeaderMain;
