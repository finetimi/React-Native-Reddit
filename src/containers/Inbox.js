// @flow
import React, { Component } from 'react';
import {
	View,
	Text,
	TouchableHighlight,
} from 'react-native';
import { TabNavigator, TabBarTop } from 'react-navigation';

// tabBarLabel style for top navigation Bar
const labelStyle =(props, alignSelf)=> ({
	fontSize: 10,
	fontWeight: '600',
	marginHorizontal: 15,
	marginVertical: 5,
	color: props.focused ? props.tintColor : "#929292",
	alignSelf
});

class Notifications extends Component {
	static navigationOptions = {
		tabBarLabel: (props)=>(<Text style={labelStyle(props, 'center')}> NOTIFICATIONS </Text>)
		
	}
	render(){
		return(
			<View>
				<Text>
				Notifications
				</Text>
			</View>
			)
	}
}

class Messages extends Component {
	static navigationOptions = {
		tabBarLabel: (props)=>(<Text style={labelStyle(props, 'center')}> MESSAGES </Text>)
	}
	render(){
		return(
			<View>
				<Text>
				MESSAGES
				</Text>
			</View>
			)
	}
}


/* Navigator for the Inbox tab which
   navigates between Notifications and Messages */
const InboxTabs = TabNavigator({
	Home: {
		screen: Notifications,
	},
	Popular:{
		screen: Messages,
	},
}, {
	tabBarComponent: (props)=> <TabBarTop style={{position: 'relative'}} {...props} indicatorStyle={{backgroundColor: props.activeTintColor}} />,
	tabBarPosition: 'top', 
	animationEnabled: true,
	tabBarOptions: {
		activeTintColor: '#20b2aa',
		style: {
			backgroundColor: '#fff',
		},
	} 
});
export default InboxTabs;
