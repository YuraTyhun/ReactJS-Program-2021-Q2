import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router, Route, Switch
} from 'react-router-dom';

import ErrorBoundary from '../ErrorBoundary';

import store from '../../store';

import './App.scss';

const StartPage = React.lazy(() => import('../../components/StartPage'));
const SearchPage = React.lazy(() => import('../../components/SearchPage'));
const DetailsPage = React.lazy(() => import('../../components/DetailsPage'));
const NotFoundPage = React.lazy(() => import('../../components/NotFoundPage'));

const App = () => (
  <Provider store={store}>
    <ErrorBoundary>
      <Suspense fallback={<span>Loading...</span>}>
        <Router>
          <Switch>
            <Route exact path="/" render={() => <StartPage />} />
            <Route exact path="/search" render={() => <SearchPage />} />
            <Route exact path="/film/:id" render={() => <DetailsPage />} />
            <Route path="*" render={() => <NotFoundPage />} />
          </Switch>
        </Router>
      </Suspense>
    </ErrorBoundary>
  </Provider>
);

export default App;
