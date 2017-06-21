import * as ACTIONTYPE from '../actions/constants';

const initialState = {hotPosts:[]};

export default function(state=initialState, action){
	switch (action.type){
		case ACTIONTYPE.LOADING_POSTS:
			return {...state, isLoading: true}

		case ACTIONTYPE.STORE_POSTS:
			console.log(action.posts);
			return Object.assign({}, state, {
				isLoading: false,
				hotPosts: action.posts
			});
		default:
			return state
	}
}