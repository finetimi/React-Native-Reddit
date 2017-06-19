import React, { Component } from 'react';
import { Card } from 'react-native-elements';
import {
	View,
	Text,
	Dimensions,
	StyleSheet,
	Image,
} from 'react-native';
import Images from '../assets';
import * as Icons from './Icons';

const {width, height } = Dimensions.get('window');

export default class List extends Component {
	render(){
		return(
			<Card containerStyle={style.card}>
					<View style = {style.cardHeader}>
						<Image source={Images.redditImage} style={style.thumbnail} />
						<View style={style.cardHeaderView}>
							<Text style={[style.cardHeaderText, {fontWeight: '600'}]}> r/photoshopbattles  </Text>
							<Text style={style.cardHeaderText}> 9h · imgur </Text>							
						</View>
						<View style={style.cardHeaderThreeDots}>
							<Text>{Icons.threeDots} </Text>
						</View>					
					</View>
					<View style={style.imageContainer}>
						<Text style={style.title}>
							 Aid worker pulls this little girl out of the 
							 kill zone. She was crawling among bodies of other 
							 civilians.
						</Text>
						<Image style={style.image} source={Images.hawks} />
						<View style={style.actions}>
							<Text style={style.actionsText}>{Icons.arrowUp } {' '} 29.7k {' '} {Icons.arrowDown} </Text>
							<Text style={style.actionsText}>{Icons.comment} 755 </Text>
							<Text style={style.actionsText}>{Icons.share} Share </Text>
						</View>
					</View>		
			</Card>
			)
	}
}

const style = StyleSheet.create({
	card:{
		marginVertical: 6,
		marginHorizontal: 0,
		borderColor: '#fff',
		paddingVertical: 5,
	},
	cardHeader:{
		borderBottomWidth: StyleSheet.hairlineWidth,
		borderBottomColor: '#d6d9dc',
		paddingHorizontal: 5,
		flexDirection: 'row',
		justifyContent: 'flex-start'
	},
	cardHeaderView:{
		margin: 5,
	},
	cardHeaderText:{
		color: 'grey',
		fontSize: 12,
		fontFamily: 'HelveticaNeue-light',
	},
	cardHeaderThreeDots:{
		flex:1, 
		alignItems: 'flex-end',
		marginTop: 12,
	},
	image:{
		height: 150,
		width: null
	},
	title:{
		marginVertical: 5,
		fontFamily: 'HelveticaNeue',
	},
	actions:{
		flexDirection: 'row',
		justifyContent: 'space-between',
		margin: 8,
	},
	actionsText:{
		fontSize: 10,
		fontWeight: '600',
		color: '#ccc',
	},
	thumbnail:{
		width: 34,
		height: 34,
		borderRadius: 34/2
	}
});