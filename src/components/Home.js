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
import LoginWebView from './WebView';

const { height, width } = Dimensions.get('window');
export default class Login extends Component{
	state ={
		isWebViewOpen: false
	}
	openWebView(){
		this.setState({
			isWebViewOpen: !this.state.isWebViewOpen
		})
	}
	render(){
		return(
			<View style={style.container}>

				<Image source={Images.redditChat} style={style.image}  />
				
				<TouchableOpacity style={style.button} onPress={()=>this.openWebView()}> 
					<Text style={style.buttonText}> Sign In </Text>
				</TouchableOpacity>
				
				{/* Render  Webview */}
				<LoginWebView isOpen={this.state.isWebViewOpen}/>
			</View>
		)
	}
}
const style = StyleSheet.create({
	container:{
		backgroundColor: '#fff',
		flex: 1,
		alignItems: 'center'
	},
	image:{
		height: 150,
		width: 150,
		shadowColor: '#000',
		shadowOffset: {width:0, height:1},
		shadowOpacity: 0.5,
		transform: [{rotate: '45deg'}],
		marginTop: 20+'%'
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
	},
	buttonText:{
		color: '#fff',
		fontWeight: 'bold'
	}
})