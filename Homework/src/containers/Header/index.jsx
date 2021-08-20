import React from 'react';
import { useSelector } from 'react-redux';

import HeaderTop from '../HeaderTop';
import HeaderMain from '../../components/HeaderMain';

import './Header.scss';

const Header = () => {
  const detailsMovieData = useSelector(({ movie: { detailsMovie } }) => detailsMovie);

  return !detailsMovieData && (
  <header className="header-container">
    <div className="blur-filter">
      <HeaderTop />
      <HeaderMain />
    </div>
  </header>
  );
};

export default Header;
