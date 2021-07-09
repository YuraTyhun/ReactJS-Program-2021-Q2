import React from 'react';
import { useSelector } from 'react-redux';

import HeaderTop from '../HeaderTop';
import HeaderMain from '../HeaderMain';

import './Header.scss';

const Header = () => {
  const detailsMovie = useSelector(({movie: {detailsMovie}}) => detailsMovie);

  return !detailsMovie && (
  <header className='header-container'>
    <div className='blur-filter'>
      <HeaderTop />
      <HeaderMain />
    </div>
  </header>
  );
};

export default Header;
