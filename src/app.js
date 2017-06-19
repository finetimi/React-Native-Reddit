import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './store';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Home from './containers/Home';
import Feed from './containers/Feed';
import Login from './containers/Login';

// Initialize redux store
const store = configureStore();

const Tabs = TabNavigator({
	Feed: {
		screen: Feed
	},
	Home: {
		screen: Home
	}
})
// Application router 
const Routes = StackNavigator({
	Login: {screen: Login},
	Feed: {
		screen: Tabs
	}

}, {initialRouteName: 'Login'})

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