import React, { Component } from 'react';
import {
	View,
	Text,
	TouchableHighlight,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class Home extends Component {
	render(){
		return(
			<View>
				<Icon name="mail-forward" size={30}/>
				<Text>
				Random Screen
				</Text>
			</View>
			)
	}
}