// @flow
/*
Reducers accept two arguments, the current state and the action
dispatched.  
*/
import * as ACTIONS from '../actions/constants';
const initialState ={};

export default function(state=initialState, action){

	switch(action.type){
		// Store authenticated user data
		case ACTIONS.AUTH_USER:
			console.log(action.token);
			return Object.assign({}, state, {
				token: action.token,
				expires: action.expires,
				isTokenExpired: ()=>Date.now() > state.expires,
			});            

		default:
			return state;
	}
	
};