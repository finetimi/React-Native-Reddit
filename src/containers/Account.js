import React, { Component } from 'react';
import {
	View,
	Text,
	TouchableHighlight,
	ScrollView, 
	StyleSheet,
	Dimensions
} from 'react-native';
import * as Icons from '../components/Icons';
import { ListItem, colors } from 'react-native-elements';

const {width, height} = Dimensions.get('window');

export default class Home extends Component {
	static navigationOptions ={
		title: "theUnredittor",
	}
	render(){
		return(
			<ScrollView style={style.container}>
				<ScrollView 
					horizontal
					snapToAlignment='start'
					snapToInterval={2}
					alwaysBounceHorizontal={true}
					showsHorizontalScrollIndicator={false}
					showsVerticallScrollIndicator={false}
					contentOffset={{x: width/2, y:0}}
					>
						<ListItem leftIcon={Icons.history} 	title="Comments" 	   hideChevron containerStyle={style.headContainer} titleStyle={style.headTitle} />
						<ListItem avatar={Icons.karma} 	leftIconContainerStyle={{width: 45+'%'}} title="13"  subtitle="KARMA" 	  subtitleStyle={style.subtitle} hideChevron containerStyle={style.headContainer} titleStyle={style.headTitle} />
						<ListItem avatar={Icons.cake} 	leftIconContainerStyle={{width: 45+'%'}} title="363d" subtitle ="REDDIT AGE" subtitleStyle={style.subtitle} hideChevron containerStyle={style.headContainer} titleStyle={style.headTitle} />
						<ListItem leftIcon={Icons.history} 	title="Redditor since" hideChevron containerStyle={style.headContainer} titleStyle={style.headTitle} />

				</ScrollView>
				<ListItem leftIcon={Icons.history} 	  title="History"		containerStyle={style.listItemContainer} titleStyle={style.titleStyle} />
				<ListItem leftIcon={Icons.bookmark}   title="Saved" 		containerStyle={style.listItemContainer} titleStyle={style.titleStyle} />
				<ListItem leftIcon={Icons.myPosts} 	  title="My Posts" 		containerStyle={style.listItemContainer} titleStyle={style.titleStyle} />
				<ListItem leftIcon={Icons.myComments} title="My Comments" 	containerStyle={style.listItemContainer} titleStyle={style.titleStyle} />
				<ListItem leftIcon={Icons.upvote}	  title="Upvoted" 		containerStyle={style.listItemContainer} titleStyle={style.titleStyle}/>
				<ListItem leftIcon={Icons.account}    title="Friends" 		containerStyle={style.listItemContainer} titleStyle={style.titleStyle} />
				<ListItem leftIcon={Icons.ban}	  	  title="Hidden" 		containerStyle={style.listItemContainer} titleStyle={style.titleStyle} />
			</ScrollView>
			)
	}
}

const style = StyleSheet.create({
	container:{
		flex: 1,
		backgroundColor: '#fff',
	},
	listItemContainer:{
		paddingTop: 1,
		borderBottomWidth: 0.1,
	},
	headContainer:{
		flex: 1,
		marginVertical: 5,
		borderRightWidth: 0.2,
		borderBottomWidth: 0.1,
		width: width/2
	},
	headTitle:{
		fontSize: 15,
	},
	titleStyle:{
		fontSize: 12
	},
	subtitle:{
		fontSize: 10,
	}
});