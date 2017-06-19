import React, { Component } from 'react';
import {
	View,
	Text,
	TouchableHighlight,
} from 'react-native';

export default class Home extends Component {
	render(){
		return(
			<View>
				<Text>
				{this.props.toString()}
				Popular Screen
				</Text>
			</View>
			)
	}
}