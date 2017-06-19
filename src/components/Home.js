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

export const LoginWebView = ()=>(
	<View style={{width: width, height:0}}>
	 	<WebView  
	 		source={{uri: LOGIN_URI}}
	 		contentInset= {style.webviewInset}
	 	/>
	</View>
	)

export const Login =()=>(
	<View style={style.container}>
		<LoginWebView />
		<Image source={Images.redditChat} style={style.image}  />
		
		<TouchableOpacity style={style.button} onPress={()=>LoginWebView()}> 
			<Text> Sign In </Text>
		</TouchableOpacity>
		
		<TouchableOpacity style={style.button}> 
			<Text> Sign Up </Text>
		</TouchableOpacity>
	</View>
)

const style = StyleSheet.create({
	container:{
		backgroundColor: '#fff',
		flex: 1
	},
	webview:{
		justifyContent: 'flex-end'
	},
	webviewInset:{
		top:5,
		left:5, 
		right: 5, 
		bottom:5
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