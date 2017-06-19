import React, { Component } from 'react';
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
import { Login } from '../components/Home';

export default class Home extends Component {
	render(){
		return(
			<Login />
			)
	}
}
