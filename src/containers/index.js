import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StackNavigator, TabNavigator } from 'react-navigation';
import * as actions from '../actions/actions';
import * as Icons from '../components/Icons';
import Home from './Home';
import Feed from './Feed';
import Login from './Login';
import Popular from './Popular';
import Inbox from './Inbox';
import Profile from './Profile';

// Navigator for the Home tab which
// navigates between Home and Popular
const homeTabs = TabNavigator({
	Home: {
		screen: Home,
		navigationOptions:{
			tabBarLabel: 'Home',
			animationEnabled: true,
		}
	},
	Popular:{
		screen: Popular,
	},
}, {tabBarPosition: 'top', animationEnabled: true})

// Global tabs navigator which appears
const Tabs = TabNavigator({
	Feed: {screen: homeTabs,
		navigationOptions:{
			header: null,
			tabBarIcon: Icons.redditIcon
		}
	},
	Search: {
		screen: Feed
	},
	Inbox: {
		screen: Inbox,
	},
	Profile: {screen: Profile}
})

// Main Application Navigtor 
const Routes = StackNavigator({
	Login: {screen: Login},
	Home:  {screen: Tabs }
},{initialRouteName: 'Login'})


export default connect(null, actions)(Routes);