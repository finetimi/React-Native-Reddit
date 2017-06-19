import * as ACTIONS from './constants';

// store autheticated userData in state
export const authenticateUser(userData){
	return {
		type: ACTIONS.LOGIN,
		userData
	}
}