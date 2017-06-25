import React, { Component } from 'react';
import {
	View,
	Text,
	TouchableHighlight,
	StyleSheet,
	ScrollView
} from 'react-native';
import { SearchBar, List, ListItem, colors } from 'react-native-elements';
import { connect } from 'react-redux';
import * as actions from '../actions';
import * as Icons from '../components/Icons';
import Images from '../assets';


class Search extends Component {
	componentDidUpdate(prevProps){
		prevProps.token !== this.props.token ?
		 this.props.fetchSubreddits(this.props.token): null
	}
	render(){
		const { subreddits } = this.props;
		return(
			<View style={style.container}>
				<ScrollView>
						<ListItem containerStyle={style.listItemContainer} titleStyle={style.titleContainer} hideChevron leftIcon={Icons.explore} leftIconContainerStyle={style.avatarStyle} title = "Browse Communities"/>
						<ListItem containerStyle={style.listItemContainer} titleStyle={style.titleContainer} hideChevron avatar={Icons.popular} avatarStyle={style.avatarStyle}  title = "Popular"/>
						<ListItem containerStyle={style.listItemContainer} titleStyle={style.titleContainer} hideChevron leftIcon={<Icons.all/>}	 leftIconContainerStyle={style.avatarStyle} roundAvatar={true} title = "All"/>
						<Text style={style.sub}> SUBSCRIPTIONS </Text>
							{subreddits ? subreddits.map((subreddit, index)=>{
								return	<ListItem 
											hideChevron
											key={index}
											containerStyle={style.listItemContainer}
											roundAvatar
											title={subreddit.display_name_prefixed}
											avatar = {subreddit.icon_img ? {uri:subreddit.icon_img} : Images.redditImage}
											avatarStyle	= {{backgroundColor: subreddit.key_color, borderRadius:34/2}}
											titleStyle={style.titleContainer}
										 />
								}) : null}
				</ScrollView>
			</View>
			)
	}
}
mapStateToProps =(state)=>({
	token: state.AuthReducer.token,
	subreddits: state.UserReducer.subreddits
});
export default connect(mapStateToProps, actions)(Search);

const style = StyleSheet.create({
	container:{
		flex: 1,
		backgroundColor: '#fff'
	},
	avatarStyle:{
		width: 34,
		height: 34,
		borderRadius: 34/2,
		backgroundColor: '#20b2aa',
	},
	listItemContainer:{
		paddingTop: 1,
		borderBottomWidth: null,
	},
	titleContainer:{
		fontSize: 13
	},
	sub:{
		color: colors.grey3, 
		fontSize: 13, 
		marginLeft:10,
		marginVertical: 10
	}
})
