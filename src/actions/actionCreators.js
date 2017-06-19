import * as ACTIONS from './constants';

// store autheticated userData in state
export const authenticateUser = (token, expires)=>{
	return {
		type: ACTIONS.AUTH_USER,
		token,
		expires
	}
};

export const savePosts = (posts)=>{
	return {
		type: ACTIONS.STORE_POSTS,
		posts
	}
};

export const isLoading = ()=>({type: ACTIONS.LOADING_POSTS });
