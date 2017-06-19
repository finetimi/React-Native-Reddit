import React, { Component } from 'react';
import {
	View,
	Text,
	TouchableHighlight,
	TextInput,
	Dimensions,
	StyleSheet,
} from 'react-native';
const {width, height } = Dimensions.get('window');

export default class Login extends Component {
	render(){
		return(
			<View style={style.container}>
				<TextInput style = {style.input} placeholder="Username"/>
				<TextInput style = {style.input} placeholder="password"/>
				<TouchableHighlight onPress={()=>this.props.navigation.navigate('Feed')}
					style={[style.buttonContainer]}>
					<Text>
						Login
					</Text>
				</TouchableHighlight>
			</View>
			)
	}
}
const style = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	},
	input:{
		height:40,
		borderWidth: 1,
		borderColor: 'blue',
		width: width/3
	},
	buttonContainer:{
		backgroundColor: 'yellow',
		height: 40,
		width: width/3,
		alignContent: 'center'
	}
})