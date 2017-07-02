import * as ACTIONS from './constants';
import * as actionCreators from './actionCreators';
import { AsyncStorage } from 'react-native';
export * from './actionCreators';

const TOKEN_KEY   = '@ReactNativeReddit:token';
const EXPIRES_KEY = '@ReactNativeReddit:expires';

const saveToken = async (token, expires)=>{
	return await AsyncStorage.multiSet([[TOKEN_KEY, token], 
		[EXPIRES_KEY, expires.toString()]], (err)=>err ? console.error(err) : null);
}

const retrieveFromStorage = (key)=> AsyncStorage.getItem(key);


export const authUser = (token, expires)=>{
	// Save token to AsyncStorage then save to redux state
	return (dispatch) =>{
		saveToken(token, expires)
			.then( dispatch(actionCreators.authenticateUser(token, expires)) )
			.catch(err=>console.error(err));
	}
};
export const logoutUser = ()=>{
	return async (dispatch)=>{
		// Remove keys from storage and clear Redux state
		await AsyncStorage.multiRemove([TOKEN_KEY, EXPIRES_KEY])
			.then(dispatch(authUser(null, null)) )
			.catch(err=>console.error)
	}
};

export const ensureAuthentication = ()=>{
	
	// Grab token from Async storage and store in state
	return async (dispatch)=>{
		const expires = await retrieveFromStorage(EXPIRES_KEY);
		const isExpired = Date.now() > expires;
		// Check if EXPIRES_KEY exists and if token is expired
		if (!expires || isExpired){
			return logoutUser();
		}
		const token = await retrieveFromStorage(TOKEN_KEY);
		dispatch(actionCreators.authenticateUser(token, expires));
	};
};

export const isTokenExpired = ()=>{
	return (dispatch, getState)=>{
		const { expires } = getState();
		return Date.now() > expires ? true : false;
	}
};

export const fetchFeed = (path, token)=>{
	const axios = new ACTIONS.Axios(token);
	return (dispatch)=>{
		axios.get(path)
			.then(response=>{
				// Array of objects with post and kind
				const { children } = response.data.data;
				// Filter for actual posts data needed 
				const posts = children.map(post=>post.data);  
				
				path === '/random' ? 
				dispatch(actionCreators.saveRandomPosts(posts)):
				dispatch(actionCreators.saveHotPosts(posts));
			})
			.catch(error=>console.error(error.response))
		}
};
export const fetchSubreddits = (token) =>{
	const axios = new ACTIONS.Axios(token);

	return (dispatch)=>{
		axios.get('/subreddits/mine/subscriber')
			.then(response=>{
				const { children } = response.data.data;
				const subreddits = children.map(subreddit=>subreddit.data);
				// sort subreddits alphabetically and store in state
				subreddits.sort((a,b)=>a.display_name.toLowerCase() < b.display_name.toLowerCase() ? -1 : 1);
				dispatch(actionCreators.saveSubreddits(subreddits));
			})
			.catch(error=>console.error(error.response))
		};
}

export const fetchUserDetails = (token) =>{
	const axios = new ACTIONS.Axios(token);
	return (dispatch) =>{
		axios.get('/api/v1/me')
			.then(response=>{
				// Filter out only data we need
				const { comment_karma, created_utc, name, link_karma } = response.data;
				const userDetails = {
					comment_karma,
					created_utc,
					name,
					link_karma
				};
				console.log(userDetails)
				dispatch(actionCreators.saveUserDetails(userDetails));
			})
			.catch(error=>console.error(error.response))
	};
}