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
	Easing,
	ActivityIndicator,
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
		this.animatedValue = new Animated.Value(defaultHeight);
		this.state = {
			height: defaultHeight,
			webViewLoading: true
		}
	}
	componentDidMount(){
		this.animateOpen();
	}
	componentWillUnmount(){
		this.animateClose();
	}
	animateOpen(){
		Animated.timing(
			this.animatedValue, 
			{
				toValue:0,
				duration: 300,
				easing: Easing.linear
			}
		).start();
	}
	animateClose(){
		Animated.timing(
			this.animatedValue,
			{
				toValue: height,
				duration: 300,
				easing: Easing.linear
			}
		).start(()=>this.props.openWebView(false));
	}

	navigateStateChanged(currentState){
		if (currentState.url.startsWith("rnreddit://")){
			this.animateClose();
			const url 	  = qs.parse(currentState.url);
			const token   = url['rnreddit://redirecturi#access_token'];
			const expires = url['expires_in'];
			const expireTime = Date.now() + parseInt(expires * 1000); // convert expire time to millisecods 

			// Store token in asyncstorage and state
			return token ? this.props.authUser(token, expireTime) : null;
		}
	}
	
	render(){
		return(
			<View style={style.container}>
				<TouchableWithoutFeedback onPress={()=>this.animateClose()}>
					<Animated.View style={style.backDrop} />
				</TouchableWithoutFeedback>
				<Animated.View 
						style={[style.modal, 
							{transform:[{translateY: this.animatedValue}]}
						]}>
						{this.state.webViewLoading && <ActivityIndicator  style={style.loading} size="large"/>}
					 	<WebView 
					 		onLoadEnd = {()=>this.setState({webViewLoading: false})}
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
		backgroundColor: '#fff',
		height: height * 0.75,
		borderTopLeftRadius: 20,
		borderTopRightRadius:20,
		overflow: 'hidden'
	},
	loading:{
		marginTop: 50+'%',
	}
})
