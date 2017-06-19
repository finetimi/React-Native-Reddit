import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Text } from 'react-native';
import { StackNavigator, TabNavigator, TabBarTop } from 'react-navigation';
import * as actions from '../actions';
import * as Icons from '../components/Icons';
import Home from './Home';
import Feed from './Feed';
import Login from './Login';
import Popular from './Popular';
import Inbox from './Inbox';
import Account from './Account';

// tabBarLabel style for Top navigation Bar
const labelStyle =(props, alignSelf)=> ({
	fontSize: 13,
	fontWeight: '600',
	marginHorizontal: 15,
	marginTop: 30,
	color: props.focused ? props.tintColor : "#929292",
	alignSelf
});

// Navigator for the Home tab which
// navigates between Home and Popular
const homeTabs = TabNavigator({
	Home: {
		screen: Home,
		navigationOptions:{
			tabBarLabel: (props)=>(<Text style={labelStyle(props, 'flex-end')}> HOME </Text>)
		},
	},
	Popular:{
		screen: Popular,
		navigationOptions:{
			tabBarLabel: (props)=>(<Text style={labelStyle(props, 'flex-start')}> POPULAR </Text>)
		}
	},
}, {
	tabBarComponent: (props)=> <TabBarTop  {...props} pr={console.log(props)}/>,
	tabBarPosition: 'top', 
	animationEnabled: true,
	tabBarOptions: {
		activeTintColor: '#20b2aa',
		style: {
			backgroundColor: '#fff',
		},
	} 
});

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
});

// Main Application Navigtor 
const Routes = StackNavigator({
	Login: {screen: Login},
	Home:  {screen: Tabs }
},{initialRouteName: 'Home'})


export default connect(null, actions)(Routes);