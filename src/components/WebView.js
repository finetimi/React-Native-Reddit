import React, { Component } from 'react';
import {
	View,
	Text,
	WebView,
	TouchableOpacity,
	Image,
	StyleSheet,
	Dimensions,
	Animated
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Images from '../assets';

const { height, width } = Dimensions.get('window');
const APP_ID = '327TeSVrOAFLXQ';
const LOGIN_URI = `https://www.reddit.com/api/v1/authorize.compact?client_id=${APP_ID}&response_type=token&state=iLoveTacosDontYou&redirect_uri=randomurl14://urlaccess&scope=read`;
const defaultHeight = height/2;

class LoginWebView extends Component{
	
	constructor(){
		this.animatedValue = Animated.Value(0);
		this.state = {
			isOpen: this.props.isOpen,
			height: this.animatedValue
		}
	}
	
	animateOpen(){
		Animated.timing(this.animatedValue, {toValue:height}).start()
	}
	
	render(){

	}
}
