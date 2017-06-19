import  React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './store';
import Router from './containers';

// instantiate redux store
const store = configureStore();

// Wrap application in provider and export the application
const App = ()=>{
	return <Provider store={store}>
				<Router />
			</Provider>
	}

export default App;