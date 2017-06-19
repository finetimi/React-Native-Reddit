import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StackNavigator, TabNavigator } from 'react-navigation';
import * as actions from '../actions';
import * as Icons from '../components/Icons';
import Home from './Home';
import Feed from './Feed';
import Login from './Login';
import Popular from './Popular';
import Inbox from './Inbox';
import Account from './Account';

// Navigator for the Home tab which
// navigates between Home and Popular
const homeTabs = TabNavigator({
	Home: {
		screen: Home,
		navigationOptions:{
			tabBarLabel: 'Home',
		},
	},
	Popular:{
		screen: Popular,
	},
}, {tabBarPosition: 'top', 
	animationEnabled: true,
	tabBarOptions: {
		activeTintColor: '#20b2aa',
		labelStyle: {
			fontSize: 15
		}
	} 
})

// Global tabs navigator which appears
const Tabs = TabNavigator({
	Feed: {screen: homeTabs,
		navigationOptions:{
			header: null,
			tabBarIcon: Icons.reddit,
		}
	},
	Search: {
		screen: Feed,
		navigationOptions:{
			tabBarIcon: Icons.search
		}
	},
	Inbox: {
		screen: Inbox,
		navigationOptions:{
			tabBarIcon: Icons.mail
		}
	},
	Account: {screen: Account,
		navigationOptions:{
			tabBarIcon: Icons.user
		}
	}
}, {tabBarOptions:{showLabel: false, activeTintColor: '#20b2aa'}
})

// Main Application Navigtor 
const Routes = StackNavigator({
	Login: {screen: Login},
	Home:  {screen: Tabs }
},{initialRouteName: 'Home'})


export default connect(null, actions)(Routes);