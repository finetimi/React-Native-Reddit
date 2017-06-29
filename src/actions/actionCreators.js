import * as ACTIONTYPE from './constants';

// store autheticated userData in state
export const authenticateUser = (token, expires)=>{
	return {
		type: ACTIONTYPE.AUTH_USER,
		token,
		expires
	}
};

export const savePosts = (posts)=>{
	return {
		type: ACTIONTYPE.STORE_POSTS,
		posts
	}
};

export const isLoading = ()=>({type: ACTIONTYPE.LOADING_POSTS });

export const saveSubreddits =(subreddits)=>{
	return {
		type: ACTIONTYPE.STORE_SUBREDDITS,
		subreddits
	}
}

export const saveUserDetails = (userDetails) =>{
	return {
		type: ACTIONTYPE.STORE_USER_DETAILS,
		userDetails
	}
}