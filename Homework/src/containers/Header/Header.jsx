import React from 'react';
import HeaderTop from '../HeaderTop';
import HeaderMain from '../HeaderMain/HeaderMain';

import './Header.scss';

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
