import './App.scss';
import Header from '../Header';
import Footer from '../Footer';
import MainContent from '../MainContent';
import ErrorBoundary from '../ErrorBoundary';

import React from 'react';

const App = () => (
  <>
    <ErrorBoundary>
      <Header />
      <MainContent />
      <Footer />
    </ErrorBoundary>
  </>
);

export default App;