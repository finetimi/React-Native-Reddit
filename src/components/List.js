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

export default class Posts extends Component {
	render(){
		const { 
			subreddit,
			domain,
			posted,
			title,
			image,
			votes,
			comments,
		} = this.props;
		return(
			<Card containerStyle={style.card}>
				<View style = {style.cardHeader}>
					<Image source={Images.redditImage} style={style.thumbnail} />
					<View style={style.cardHeaderView}>
						<Text style={[style.cardHeaderText, {fontWeight: '600'}]}> {subreddit} </Text>
						<Text style={style.cardHeaderText}> {posted} · {domain} </Text>							
					</View>
					<View style={style.cardHeaderThreeDots}>
						<Text>{Icons.threeDots} </Text>
					</View>					
				</View>
				<View style={{flex:1}}>
					<Text style={style.title}>
						{title}
					</Text>
					{/* If image exists render image else display nothing */}
					{image ? <Image style={style.image} source={{uri:image}} /> : null}
					<View style={style.actions}>
						<Text style={style.actionsText}>{Icons.arrowUp } {' '} {votes} {' '} {Icons.arrowDown} </Text>
						<Text style={style.actionsText}>{Icons.comment} {comments} </Text>
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
		flex: 1
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
		flex: 1,
		resizeMode: 'cover',
		height: 300,
		width: null,
		marginHorizontal: -5+'%'
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