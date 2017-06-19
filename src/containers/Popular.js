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
		if (nextProps.state.token && 
			nextProps.state.token !== this.props.state.token){
				this.props.fetchFeed(nextProps.state.token);
		}
	}
	render(){
		return(
				
			<ScrollView>
				<SortButton /> 
				<NewPost />
				<List />
			</ScrollView>
			)
	}
}
const mapStateToProps =(state)=>({
	state:{ ...state.AuthReducer, ...state.PostReducer}

})
export default connect(mapStateToProps, actions)(Popular);
