import React from 'react';

import './Header.scss';

import HeaderTop from '../HeaderTop';
import HeaderMain from '../HeaderMain';


const Header = () => {

  return (
  <header className='header-container'>
    <div className='blur-filter'>
      <HeaderTop />
      <HeaderMain />
    </div>
  </header>
  );
};

export default Header;
