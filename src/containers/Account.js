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
					snapToAlignment='center'
					snapToInterval={2}
					alwaysBounceHorizontal={true}
					showsHorizontalScrollIndicator={false}
					showsVerticallScrollIndicator={false}
					contentOffset={{x: width/2, y:0}}
					>
						<ListItem leftIcon={Icons.history} 	title="Comments" hideChevron containerStyle={style.headContainer} titleStyle={style.titleStyle} />
						<ListItem leftIcon={Icons.history} 	title="Karma" hideChevron containerStyle={style.headContainer} titleStyle={style.titleStyle} />
						<ListItem leftIcon={Icons.history} 	title="Age" hideChevron containerStyle={style.headContainer} titleStyle={style.titleStyle} />
						<ListItem leftIcon={Icons.history} 	title="Redditor since" hideChevron containerStyle={style.headContainer} titleStyle={style.titleStyle} />

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
		borderBottomWidth: 0.2,
	},
	headContainer:{
		marginVertical: 5,
		borderRightWidth: 0.2,
		borderBottomWidth: 0.2,
		width: width/2
	},
	titleStyle:{
		fontSize: 12
	},
	sub:{
		color: colors.grey3, 
		fontSize: 13, 
		marginLeft:10,
		marginVertical: 10
	},
	subtitle:{
		fontSize: 10,
		fontWeight: 'normal'
	}
});