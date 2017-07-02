import React, { Component } from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
	View,
	Text,
	WebView,
	TouchableOpacity,
	Image,
	StyleSheet,
	Dimensions,
} from 'react-native';
import LoginWebView from '../components/WebView';
import Images from '../assets';

const { height, width } = Dimensions.get('window');

class Auth extends Component {
	state = {
		isWebViewOpen: false
	};
	constructor(props){
		super(props);
		this.props.ensureAuthentication();
	}
	
	openWebView(bool){
		this.setState({
			isWebViewOpen: bool
		});
	}
	render(){
		return (
			<View style={style.container}>
				<Image source={Images.signUp} style={style.image} />
				<Text style={style.text}> Sign In to share your interests </Text>
				<TouchableOpacity style={style.button} onPress={()=>this.openWebView(true)}> 
					<Text style={style.buttonText}> Sign In </Text>
				</TouchableOpacity>
				{this.state.isWebViewOpen && <LoginWebView 
												authUser 	= {this.props.authUser}
												openWebView	= {this.openWebView.bind(this)} 
												/>
				}
			</View>
			)
	}
}
const mapStateToProps =(state)=>({
	state: state.AuthReducer
})

// shortcut for mapping dispatch to props
export default connect(mapStateToProps, actions)(Auth)

const style = StyleSheet.create({
	container:{
		backgroundColor: '#fcfcfc', 
		flex:1,
		justifyContent: 'flex-start',
		alignItems: 'center'
	},
	image:{
		height: height/2,
		width: width/1.5,
		resizeMode: 'contain'
	},
	text:{
		fontSize: 15,
		fontWeight: 'normal',
		marginTop: -10
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