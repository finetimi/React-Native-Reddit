// @flow
/*
Reducers accept two arguments, the current state and the action
dispatched.  
*/
import * as ACTIONS from '../actions/constants';
const initialState ={token: null, expires:null, isTokenExpired: null};

export default function(state=initialState, action){

	switch(action.type){
		// Store authenticated user data
		case ACTIONS.AUTH_USER:
			return Object.assign({}, state, {
				token: action.token,
				expires: action.expires,
			});            

		default:
			return state;
	}
	
};