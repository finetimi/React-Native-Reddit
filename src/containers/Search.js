import React, { Component } from 'react';
import SearchComponent from '../components/Search';
import { connect } from 'react-redux';
import * as actions from '../actions';



class Search extends Component {
	componentDidUpdate(prevProps){
		// if there's a new token fetch subreddits
		prevProps.token !== this.props.token ?
		 this.props.fetchSubreddits(this.props.token): null
	}

	render(){
		const { subreddits } = this.props;
		return(
			<SearchComponent  subreddits={subreddits}/>
			)
	}
}
mapStateToProps = (state)=>({
	token: state.AuthReducer.token,
	subreddits: state.UserReducer.subreddits
});
export default connect(mapStateToProps, actions)(Search);