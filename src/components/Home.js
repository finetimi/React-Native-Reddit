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
export default (props)=>(
		<View style={style.container}>
			<Image source={Images.redditChat} style={style.redditLogo}  />
			<Text style={style.title}> Brandon Free </Text>
			<Image source={Images.hawks} style={style.image} />
			<Image source={Images.banned} style={[style.banned]} />
				
			<TouchableOpacity style={style.button} onPress={()=>this.openWebView()}> 
				<Text style={style.buttonText}> Sign In </Text>
			</TouchableOpacity>
			<TouchableOpacity style={[style.button, {marginTop:15, backgroundColor:'#FF4300'}]} onPress={()=>this.openWebView()}> 
				<Text style={style.buttonText}> Sign Up </Text>
			</TouchableOpacity>

		</View>
		)

const style = StyleSheet.create({
	container:{
		backgroundColor: 'white',
		alignItems: 'center',
		height,
		width
	},
	title:{
		fontSize: 50,
		color: 'grey',
		fontFamily: 'HelveticaNeue-Light',
		fontWeight: '100',
		textShadowColor: '#149EF0',
		textShadowOffset: {width:0, height:1}
	},
	redditLogo:{
		height: 80,
		width: 80,
		shadowColor: '#000',
		shadowOffset: {width:0, height:1},
		shadowOpacity: 0.5,
		transform: [{rotate: '45deg'}],
		marginTop: 40,
		marginLeft: 230,
		marginBottom: -30,
		zIndex: 5
	},
	image:{
		height: 150,
		width: 150,
		marginTop:20
	},
	banned: {
		shadowColor: '#000',
		shadowOffset: {width:0, height:1},
		shadowOpacity: 0.5,
		height: 150,
		width: 150,
		position: 'absolute',
		top: 170,
		left: 113,
		transform:[{rotate: '90deg' }]
	},
	button: {
		backgroundColor: '#149EF0',
		minWidth: width/2,
		height: 40,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 5,
		shadowOpacity: 0.4,
		shadowOffset: {width:0 , height:0},
		shadowRadius: 3,
		marginTop: 40
	},
	buttonText:{
		color: '#fff',
		fontWeight: 'bold'
	}
})