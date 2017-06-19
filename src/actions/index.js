import * as ACTIONS from './constants';
import * as actionCreators from './actionCreators';
import { AsyncStorage } from 'react-native';
export * from './actionCreators';

const TOKEN_KEY   = '@ReactNativeReddit:token';
const EXPIRES_KEY = '@ReactNativeReddit:expires';

const saveToken = async (token, expires)=>{
	// Add expires in seconds to current time
	const expireTime = Date.now() + expires;
	try {
		await AsyncStorage.setItem(TOKEN_KEY, token);
		await AsyncStorage.setItem(EXPIRES_KEY, expireTime.toString());
	} catch (error){
		return console.error(error);
	}
}

const retrieveFromStorage = async (key)=> await AsyncStorage.getItem(key);

export const authUser = (token, expires)=>{
	// Save token to AsyncStorage then save to redux state
	return (dispatch) =>{
		saveToken(token)
			.then(dispatch(actionCreators.authenticateUser(token, expires)))
			.catch(err=>console.error(err));
	}
}
export const logoutUser = async ()=>{
	await AsyncStorage.multiRemove([TOKEN_KEY, EXPIRES_KEY])
		.then(dispatch(authUser(null, null)) )
		.catch(err=>console.error)
}

export const ensureAuthentication =()=>{
	const expires = retrieveFromStorage(EXPIRES_KEY);
	// Check if EXPIRES_KEY exists and if token is expired
	if (!expires || Date.now() > expires){
		return logoutUser();
	}
	// Grab token from Async storage and store in state
	return (dispatch)=>{
		const token = retrieveFromStorage(TOKEN_KEY);
		authUser(token, expires);
	}
}