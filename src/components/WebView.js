import React, { Component } from 'react';
import {
	View,
	Text,
	WebView,
	TouchableWithoutFeedback,
	Image,
	StyleSheet,
	Dimensions,
	Animated,
	Easing
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Images from '../assets';
import { APP_ID, LOGIN_URI } from '../actions/constants';
import qs from 'qs';

const { height, width } = Dimensions.get('window');
const defaultHeight = height/2;

export default class LoginWebView extends Component{
	
	constructor(){
		super();
		this.animatedValue = new Animated.Value(0);
		this.state = {
			height: defaultHeight
		}
	}
	componentDidMount(){
		this.animateOpen();
	}
	componentDidUpdate(){
		console.log(this.props)
	}
	animateOpen(){
		Animated.timing(
			this.animatedValue, 
			{
				toValue:0,
				duration: 3000,
				easing: Easing.linear
			}
		).start();
	}
	animateClose(){
		Animated.timing(
			this.animatedValue,
			{
				toValue: height,
				duration: 4000,
				easing: Easing.linear
			}
		).start();
	}
	navigateStateChanged(currentState){
		if (currentState.url.startsWith("rnreddit://")){
			this.authUrl = currentState.url;
			// this.animateClose();
			const url 	  = qs.parse(this.authUrl);
			const token   = url['rnreddit://redirecturi#access_token'];
			const expires = url['expires_in'];
			console.log(token, expires)
			
			// Store token in asyncstorage and state
			this.props.authUser(token, expires);
		}
	}
	
	render(){

		return(
			<View style={style.container}>
				<TouchableWithoutFeedback>
					<Animated.View style={style.backDrop} />
				</TouchableWithoutFeedback>
				<Animated.View 
						style={[style.modal, 
						]}>
					 	<WebView 
					 		source={{uri: LOGIN_URI}}
					 		onNavigationStateChange ={this.navigateStateChanged.bind(this)}/>
				</Animated.View>
			</View> 
		)
	}
}

const style = StyleSheet.create({
	container:{
		...StyleSheet.absoluteFillObject,
		backgroundColor: 'transparent',
		justifyContent: 'flex-end',
		flex: 1
	},
	backDrop:{
		...StyleSheet.absoluteFillObject,
		backgroundColor: '#000',
		opacity: 0.5,
	},
	modal:{
		...StyleSheet.absoluteFillObject,
		height: height/2,
		backgroundColor: '#fff',
		// top: height - height/2
	},
	webviewInset:{
		top:5,
		left:5, 
		right:5, 
		bottom:5,
	},
})
