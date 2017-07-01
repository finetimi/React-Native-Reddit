import React, { Component } from 'react';
import {
	View,
	Text,
} from 'react-native';
import Profile from '../components/Account';
import * as actions from '../actions';
import { connect } from 'react-redux';
import { timeFromNow } from '../actions/constants';

class Account extends Component {
	constructor(){
		super();
	}
	static navigationOptions ={
		title : 'Join Reddit'
	}

	componentWillReceiveProps(nextProps){
		const { token } = this.props;
		// If there's a new token, fetch user account details
		if (nextProps.token && token !== nextProps.token){
			return this.props.fetchUserDetails(nextProps.token);
		}
		// else if token is expired, clear user account details
		else if (!nextProps.token && token !== nextProps.token){
			return this.props.saveUserDetails(null);
		}
	}

	componentDidUpdate(prevProps){
		const { name } = this.props;
		// If there's a username switch the title to a username
		name && name !== prevProps.name ? Account.navigationOptions['title'] = name : Account.navigationOptions['title'] = 'Join Reddit';
	}

	// Change date from epoch time to (Month Day, Year) format
	formatDate(epoch){
		// convert epoch date to milliseconds and return an array
		const dateArray = new Date(epoch*1000).toDateString().split(' ');
		// Add ',' to the end of Day
		dateArray[2] += ',';
		// Remove the first element of dateArray and return a string
		const dateString =  dateArray.splice(1).join(' ');
		return dateString;
	}

	render(){
		const { token, link_karma, comment_karma, created_utc } = this.props;
		return(
			<Profile 
				karma 		  = {link_karma + comment_karma}
				age 		  = {timeFromNow(created_utc)}
				link_karma 	  = {link_karma}
				comment_karma = {comment_karma}
				created       = {this.formatDate(created_utc)}
				/>				
			)
	}
}

const mapStateToProps = state =>({
	token: state.AuthReducer.token,
	...state.UserReducer.user
});

export default connect(mapStateToProps, actions)(Account);