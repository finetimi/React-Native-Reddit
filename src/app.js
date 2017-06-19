import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './store';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Home from './containers/Home';
import Feed from './containers/Feed';
import Login from './containers/Login';
// import { Icon } from 'react-native-elements';

// Initialize redux store
const store = configureStore();

// Tabs navigator 
const Tabs = TabNavigator({
	Feed: {
		screen: Feed,
		navigationOptions:{
			tabBarLabel: 'Feed',
		}
	},
	Home: {
		screen: Home,
		navigationOptions:{
			tabBarLabel: 'Random'
		}
	}
})

// Main Application Navigtor 
const Routes = StackNavigator({
	Login: {screen: Login},
	Feed: {
		screen: Tabs // return Tabs navigator 
	},

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