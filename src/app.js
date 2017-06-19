import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './store';
import { TabNavigator } from 'react-navigation';
import Home from './containers/Home';
import Feed from './containers/Feed';

// Initialize redux store
const store = configureStore();

// Application router 
const Routes = TabNavigator({
	Feed: {screen: Home},
	Random: {Screen: Random},
})

// Wrap application in provider and export the application
export default class App extends Component{
	render(){
		return (
		<Provider store={store}>
			<Routes />
		</Provider>
	)
			
	}
}