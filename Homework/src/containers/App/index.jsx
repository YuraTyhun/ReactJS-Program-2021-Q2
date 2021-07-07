import React from 'react';
import { Provider } from 'react-redux';

import Header from '../Header';
import Footer from '../Footer';
import MainContent from '../MainContent';
import ErrorBoundary from '../ErrorBoundary';
import ModalWindow from '../ModalWindow';
import DetailsPage from '../DetailsPage';

import store from '../../store';

import './App.scss';

const App = () => {

	return (
		<Provider store={store}>
			<ErrorBoundary>
				<Header />
				<DetailsPage />
				<MainContent />
				<ModalWindow />
				<Footer />
			</ErrorBoundary>
		</Provider>
	);
}

export default App;