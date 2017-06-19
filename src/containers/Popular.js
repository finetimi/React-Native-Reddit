import React, { Component } from 'react';
import {
	View,
	Text,
	TouchableHighlight,
} from 'react-native';
import { connect } from 'react-redux';
import AXIOS from '../actions/constants';

class Popular extends Component {
	componentWillUpdate(nexProps){
		if (nexProps.state.token !== this.props.state.token){
			// AXIOS(this.props.state.token)
			// .get('/hot')
			// .then(console.log)
			// .catch(err=>console.error(err.response))
		}
		// console.log(this.props)
		
	}
	render(){
		return(
			<View>
				<Text>

				</Text>
			</View>
			)
	}
}
const mapStateToProps =(state)=>({
	state: state.AuthReducer
})
export default connect(mapStateToProps, null)(Popular);