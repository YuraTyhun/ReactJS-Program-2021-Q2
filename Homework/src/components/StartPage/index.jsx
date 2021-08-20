import React from 'react';
import Header from '../../containers/Header';
import ModalWindow from '../../containers/ModalWindow';
import Footer from '../Footer';
import NoMoviesFound from '../NoMovieFound';

const StartPage = () => (
  // PATTERN: Use Fragments to avoid additional HTML element wrappers
  <>
    <Header />
    <ModalWindow />
    <NoMoviesFound />
    <Footer />
  </>
);

export default StartPage;
