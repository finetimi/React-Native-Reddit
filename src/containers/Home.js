import React, { Component } from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';
import {
	View,
	Text,
	WebView,
	TouchableOpacity,
	Image,
	StyleSheet,
	Dimensions,
} from 'react-native';
const { height, width } = Dimensions.get('window');

import Icon from 'react-native-vector-icons/FontAwesome';
import Images from '../assets';
import Login from '../components/Home';

class Home extends Component {
	render(){
		console.log(this.props)
		return (
			<Login  />
			)
	}
}
// shortcut for mapping dispatch to props
export default connect(null, actions)(Home)