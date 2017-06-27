import React, { Component } from 'react';
import {
	View,
	Text,
	TouchableHighlight,
} from 'react-native';

export default class Home extends Component {
	static navigationOptions ={
		title: 'theUnredittor',
	}
	render(){
		return(
			<View>
				<Text>
				Profile Screen
				</Text>
			</View>
			)
	}
}