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
import Posts from '../components/List';
import { NewPost, SortButton } from '../components/Misc';
import { timeFromNow } from '../actions/constants';


class Popular extends Component {
	componentDidMount(){
		const { token, fetchFeed } = this.props;
		// fetch feed if there's a token, else do nothing
		return token && fetchFeed('/random', token);
	}

	componentWillUpdate(nextProps){
		// If token changes refresh feed with new token
		if (nextProps.token && 
			nextProps.token !== this.props.token){
				this.props.fetchFeed('/random', nextProps.token);
		}
	}

	render(){
		const { randomPosts } = this.props; 
		return(	
			<ScrollView>
				<SortButton /> 
				<NewPost />
				{randomPosts && randomPosts.map((post, index)=>{
					return <Posts 
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
	...state.AuthReducer, 
	...state.UserReducer

})
export default connect(mapStateToProps, actions)(Popular);
