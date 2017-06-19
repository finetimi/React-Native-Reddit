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
import Login from '../components/Home';
import LoginWebView from '../components/WebView';

const { height, width } = Dimensions.get('window');


class Home extends Component {
	constructor(props){
		super(props);
		this.props.ensureAuthentication();
	}
	render(){
		return (
			<View style={{flex:1}}>
				<Login />
				<LoginWebView {...this.props}/>
			</View>

			)
	}
}
const mapStateToProps =(state)=>{
	return {state: state.auth}
}

// shortcut for mapping dispatch to props
export default connect(mapStateToProps, actions)(Home)