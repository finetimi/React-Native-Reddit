import * as ACTIONS from './constants';

// store autheticated userData in state
export const authenticateUser = (token, expires)=>{
	return {
		type: ACTIONS.AUTH_USER,
		token,
		expires
	}
}