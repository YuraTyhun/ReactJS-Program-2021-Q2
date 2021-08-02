import React from 'react';
import { Provider } from 'react-redux';
import { 
	BrowserRouter as Router, Route, Switch
} from 'react-router-dom';

import ErrorBoundary from '../ErrorBoundary';
import NotFoundPage from '../../components/NotFoundPage';
import StartPage from '../../components/StartPage';
import SearchPage from '../../components/SearchPage';
import DetailsPage from '../../components/DetailsPage';

import store from '../../store';

import './App.scss';

const App = () => {

	return (
		<Provider store={store}>
			<ErrorBoundary>
				<Router>
					<Switch>
						<Route exact path="/" component={StartPage}/>
						<Route exact path="/search" component={SearchPage}/>
						<Route exact path="/film/:id" component={DetailsPage}/>
						<Route path="*" component={NotFoundPage}/>
					</Switch>
				</Router>
			</ErrorBoundary>
		</Provider>
	);
}

export default App;