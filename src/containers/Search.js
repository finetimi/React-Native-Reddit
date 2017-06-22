import React, { Component } from 'react';
import {
	View,
	Text,
	TouchableHighlight,
	StyleSheet
} from 'react-native';
import { SearchBar } from 'react-native-elements';

export default class Search extends Component {
	render(){
		return(
			<View style={style.container}>
				<SearchBar placeHolder='Type Here' />
			</View>
			)
	}
}

const style = StyleSheet.create({
	container:{
		flex: 1,
	}
})