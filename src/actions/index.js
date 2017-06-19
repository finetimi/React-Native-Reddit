import * as ACTIONS from './constants';
import * as actionCreators from './actionCreators';
import { AsyncStorage } from 'react-native';
export * from './actionCreators';
import axios from 'axios';

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
			console.log('deleting state')
			return logoutUser();
		}
		const token = await retrieveFromStorage(TOKEN_KEY);
		console.log(token, expires );
		dispatch(actionCreators.authenticateUser(token, expires));
	};
};

export const isTokenExpired = ()=>{
	return (dispatch, getState)=>{
		const { expires } = getState();
		return Date.now() > expires ? true : false;
	}
}

export const fetchFeed = (token)=>{
	const config = {
		baseURL: 'https://oauth.reddit.com',
		headers: {'Authorization': `bearer ${token}`}
	}
	console.log(token)
	return (dispatch)=>{
		axios.get('/hot', config)
			.then(response=>{
				const posts = response.data.data.children;
				dispatch(actionCreators.savePosts(posts));
			})
			.catch(error=>console.error(error.response))
		}
}