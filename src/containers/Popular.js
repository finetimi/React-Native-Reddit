import React, { Component } from 'react';
import {
	View,
	Text,
	TouchableHighlight,
	StyleSheet,
	ScrollView
} from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';
import List from '../components/List';
import { NewPost, SortButton } from '../components/Misc';


class Popular extends Component {
	componentWillUpdate(nextProps){
		// If token changes refresh feed with new token
		if (nextProps.state.token && 
			nextProps.state.token !== this.props.state.token){
				console.log('new token', nextProps.state.token)
				this.props.fetchFeed(nextProps.state.token);
		}
	}
	timeFromNow(epochTime){
		// Get time difference in minutes 
		const timeDelta = Math.floor((Date.now()/1000- epochTime)/60);
		switch(timeDelta){
			// if timedelta is zero return Now
			case timeDelta === 0:
				return 'Now';
			// if timedelta is less than 60 return minutes
			case timeDelta < 60:
				return `${timeDelta}m`;
			// return the hour equivalent
			default:
				const hours = Math.floor(timeDelta/60);
				return `${hours}h`
		}
	}
	render(){
		const { hotPosts } = this.props.state; 
		return(	
			<ScrollView>
				<SortButton /> 
				<NewPost />
				{hotPosts && hotPosts.map((post, index)=>{
					return <List 
						key		  = {index}
						subreddit = {post.subreddit_name_prefixed}
						domain	  = {post.domain}
						posted    = {this.timeFromNow(post.created_utc)}
						title 	  = {post.title} 
						image	  = {post.preview ? post.preview.images[0].source.url : null}
						votes 	  = {post.score}
						comments  = {post.num_comments}
						 />
					})
				}
			</ScrollView>
			)
	}
}
const mapStateToProps =(state)=>({
	state:{ ...state.AuthReducer, ...state.UserReducer}

})
export default connect(mapStateToProps, actions)(Popular);
