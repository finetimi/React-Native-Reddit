import * as ACTIONS from './constants';

// store autheticated userData in state
export const authenticateUser = (token)=>{
	return {
		type: ACTIONS.LOGIN,
		token
	}
}