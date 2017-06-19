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
		case ACTIONS.LOGIN_USER:
			return Object.assign({}, state, {
				userData: action.userData
			});

		default:
			return state;
	}
	
};