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
import { timeFromNow } from '../actions/constants';


class Popular extends Component {
	componentWillUpdate(nextProps){
		// If token changes refresh feed with new token
		if (nextProps.state.token && 
			nextProps.state.token !== this.props.state.token){
				console.log('new token', nextProps.state.token)
				this.props.fetchFeed(nextProps.state.token);
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
						posted    = {timeFromNow(post.created_utc)}
						title 	  = {post.title} 
						image	  = {post.preview ? post.preview.images[0].source.url : null}
						votes 	  = {post.score/1e3 < 1 ? post.score : `${Math.round(post.score/1e3)}k`}
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
