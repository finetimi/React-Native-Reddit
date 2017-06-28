// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Text } from 'react-native';
import { StackNavigator, TabNavigator, TabBarTop } from 'react-navigation';
import * as actions from '../actions';
import * as Icons from '../components/Icons';
import { SearchReddit } from '../components/Misc';
import Home from './Home';
import Search from './Search';
import Login from './Login';
import Popular from './Popular';
import Inbox from './Inbox';
import Account from './Account';

// tabBarLabel style for top navigation Bar
const labelStyle =(props, alignSelf, marginTop)=> ({
	fontSize: 13,
	fontWeight: '600',
	marginHorizontal: 15,
	marginTop,
	color: props.focused ? props.tintColor : "#929292",
	alignSelf
});
// IndicatorStyle is an absolute positioned View
const indicatorStyle = (props, alignSelf) => ({
	backgroundColor: props.activeTintColor,
	alignSelf: 'flex-end',
});

/**********  NAVIGATORS   ***********/

/* Navigator for the Home tab which
   navigates between Home and Popular */
const homeTabs = TabNavigator({
	Home: {
		screen: Home,
		navigationOptions:{
			tabBarLabel: (props)=>(<Text style={labelStyle(props, 'flex-end', 30)}> HOME </Text>)
		},
	},
	Popular:{
		screen: Popular,
		navigationOptions:{
			tabBarLabel: (props)=>(<Text style={labelStyle(props, 'flex-start', 30)}> POPULAR </Text>)
		}
	},
}, {
	tabBarComponent: (props)=> <TabBarTop {...props} indicatorStyle={indicatorStyle(props, 'flex-end')} />,
	tabBarPosition: 'top', 
	animationEnabled: true,
	tabBarOptions: {
		activeTintColor: '#20b2aa',
		style: {
			backgroundColor: '#fff',
		},
	} 
});

// Global tabs navigator which appears below all pages
const Tabs = TabNavigator({
	Feed: {screen: homeTabs,
		navigationOptions:{
			header: null,
			tabBarIcon: Icons.reddit,
		}
	},
	Search: {
		screen: Search,
		navigationOptions:{
			tabBarIcon: Icons.search,
			header: <SearchReddit />
		}
	},
	Inbox: {
		screen: Inbox,
		navigationOptions:{
			tabBarIcon: Icons.mail,
			title: 'Inbox',
			headerLeft: Icons.pencil,
			headerRight: Icons.tasks,
			headerStyle: {
				backgroundColor: '#fff'
			}
		}
	},
	Account: {
		screen: Account,
		navigationOptions:{
			tabBarIcon: Icons.user,
			headerRight: Icons.settings,
			headerStyle:{
				backgroundColor: '#fff'
			}
		}
	}
}, {
	tabBarOptions:{showLabel: false, activeTintColor: '#20b2aa', backgroundColor:'#fff'},
});

// Main Application Navigtor 
const Routes = StackNavigator({
	Home:  {screen: Tabs }
},{initialRouteName: 'Home'})


export default connect(null, actions)(Routes);