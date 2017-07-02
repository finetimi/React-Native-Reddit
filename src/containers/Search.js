import React, { Component } from 'react';
import SearchComponent from '../components/Search';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Login from './Auth';

class Search extends Component {
	componentDidMount(){
		const { token } = this.props;
		// If there's a token fetch subreddits else do nothing
		token && this.props.fetchSubreddits(token);
	}

	componentDidUpdate(prevProps){
		// if there's a new token fetch subreddits
		prevProps.token !== this.props.token ?
		 this.props.fetchSubreddits(this.props.token): null
	}

	render(){
		const { token, subreddits } = this.props;

		return(
			token ? <SearchComponent  subreddits={subreddits}/> : <Login />
			)
	}
}
mapStateToProps = (state)=>({
	token: state.AuthReducer.token,
	subreddits: state.UserReducer.subreddits
});
export default connect(mapStateToProps, actions)(Search);