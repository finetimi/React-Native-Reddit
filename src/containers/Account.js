import React, { Component } from 'react';
import {
	View,
	Text,
} from 'react-native';
import Profile from '../components/Account';
import * as actions from '../actions';
import { connect } from 'react-redux';

class Account extends Component {
	constructor(){
		super();
	}
	static navigationOptions ={
		// title: this.props.token ? this.props.name : "Join Reddit",
		// title: 'Join Reddit',
		// me: console.log(Account)
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

	render(){
			console.log(Account.navigationOptions)

		return(
			<Profile {...this.props}/>
			)
	}
}

const mapStateToProps = state =>({
	token: state.AuthReducer.token,
	...state.UserReducer.user
});

export default connect(mapStateToProps, actions)(Account);