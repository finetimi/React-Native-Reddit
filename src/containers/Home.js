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
	state = {
		openWebView: false
	};
	constructor(props){
		super(props);
		this.props.ensureAuthentication();
	}
	
	openWebView(bool){
		this.setState({
			openWebView: bool
		});
	}
	render(){
		return (
			<View style={{flex:1}}>
				<Login openWebView ={this.openWebView.bind(this)} />
				{ this.state.openWebView ? 
					<LoginWebView 
						{...this.props}
						openWebView={this.openWebView.bind(this)} 
						/> : null 
				}	
			</View>
			)
	}
}
const mapStateToProps =(state)=>({
	state: state.AuthReducer
})

// shortcut for mapping dispatch to props
export default connect(mapStateToProps, actions)(Home)