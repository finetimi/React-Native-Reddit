import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/actions';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Home from './Home';
import Feed from './Feed';
import Login from './Login';
// import { Icon } from 'react-native-elements';


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


export default connect(null, actions)(Routes);