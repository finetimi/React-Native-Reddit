import React, { Component } from 'react';
import {
	View,
	Text,
	WebView,
	TouchableOpacity,
	Image,
	StyleSheet,
	Dimensions,
} from 'react-native';
const { height, width } = Dimensions.get('window');

import Icon from 'react-native-vector-icons/FontAwesome';
import Images from '../assets';

export default class Home extends Component {
	render(){
		return(
			<View style={style.container}>
				<Image source={Images.redditChat} style={style.image}  />
				<TouchableOpacity style={style.button}> 
					<Text> Sign In </Text>
				</TouchableOpacity>
				<TouchableOpacity style={style.button}> 
					<Text> Sign Up </Text>
				</TouchableOpacity>
			</View>
			)
	}
}

const style = StyleSheet.create({
	container:{
		backgroundColor: '#fff',
		flex: 1
	},
	image:{
		height: 150,
		width: 150,
		shadowColor: '#000',
		shadowOffset: {width:0, height:0},
		shadowOpacity: 1
	},
	button: {
		backgroundColor: '#149EF0',
		minWidth: width/3,
		minHeight: 20
	}
})