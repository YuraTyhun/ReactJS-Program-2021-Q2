import React from 'react';
import Header from '../../containers/Header';
import MainContent from '../../containers/MainContent';
import ModalWindow from '../../containers/ModalWindow';
import Footer from '../Footer';

const SearchPage = () => (
  // PATTERN: Use Fragments to avoid additional HTML element wrappers
  <>
    <Header />
    <MainContent />
    <ModalWindow />
    <Footer />
  </>
);

export default SearchPage;
