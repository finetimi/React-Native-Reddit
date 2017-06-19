import React, { Component } from 'react';
import {
	View,
	Text,
	WebView,
	TouchableWithoutFeedback,
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

export default class LoginWebView extends Component{
	
	constructor(){
		super();
		this.animatedValue = new Animated.Value(0);
		this.state = {
			height: defaultHeight
		}
	}
	componentWillReceiveProps(nextProps){
		if (!this.props.isOpen && nextProps.isOpen){
			this.animateOpen();
		}
		else if (this.props.isOpen && !nextProps.isOpen){
			this.animateClose();
		}
	}
	animateOpen(){
		Animated.timing(
			this.animatedValue, 
			{
				toValue:0,
				duration: 1000
			}
		).start();
	}
	animateClose(){
		Animated.timing(
			this.animatedValue,
			{
				toValue: height,
				duration: 4000
			}
		).start();
	}
	
	render(){
		if (!this.props.isOpen){
			return null
		}
		return (
				<TouchableWithoutFeedback style={{flex:1, backgroundColor:'#000', opacity:0.5, height:height}}>
					<Animated.View 
						style={[style.container, {height:this.state.height, transform:[{translateY:this.animatedValue}]}
						]}>
					 	<WebView  
					 		source={{uri: LOGIN_URI}}
					 		onNavigateStat
					 		contentInset={{top:5, left:5, bottom:10, right:10}}
					 	/>
					</Animated.View>
				</TouchableWithoutFeedback>
		)
	}
}

const style = StyleSheet.create({
	container:{
		justifyContent: 'flex-end',
		width: width,
	},
	webviewInset:{
		top:5,
		left:5, 
		right:5, 
		bottom:5,
	},
})
