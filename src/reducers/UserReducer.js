import * as ACTIONTYPE from '../actions/constants';

const initialState = {
	hotPosts: null,
	subreddits: null
};

export default function(state=initialState, action){
	switch (action.type){
		case ACTIONTYPE.LOADING_POSTS:
			return {...state, isLoading: true}

		case ACTIONTYPE.STORE_POSTS:
			return Object.assign({}, state, {
				isLoading: false,
				hotPosts: action.posts
			});

		case ACTIONTYPE.STORE_SUBREDDITS:
			return Object.assign({}, state, {
				subreddits: action.subreddits,
				isLoading: false
			});
		default:
			return state
	}
}