import * as ACTIONS from './constants';
import * as actionCreators from './actionCreators';
import { AsyncStorage } from 'react-native';
export * from './actionCreators';

const TOKEN_KEY   = '@ReactNativeReddit:token';
const EXPIRES_KEY = '@ReactNativeReddit:expires';

const saveToken = async (token, expires)=>{
	// Add expires in seconds to current time
	const expireTime = Date.now() + expires;
	const expireValue = expireTime.toString();
	console.log("expire value", expireValue)
	try {
		await AsyncStorage.setItem(TOKEN_KEY, token);
		await AsyncStorage.setItem(EXPIRES_KEY, expireValue);
	} catch (error){
		return console.error(error);
	}
}

const retrieveFromStorage = (key)=> AsyncStorage.getItem(key);


export const authUser = (token, expires)=>{
	// Save token to AsyncStorage then save to redux state
	return (dispatch) =>{
		saveToken(token, expires)
			.then(dispatch(actionCreators.authenticateUser(token, expires)))
			.catch(err=>console.error(err));
	}
};
export const logoutUser = async ()=>{
	// Remove keys from storage and clear Redux state
	await AsyncStorage.multiRemove([TOKEN_KEY, EXPIRES_KEY])
		.then(dispatch(authUser(null, null)) )
		.catch(err=>console.error)
};

export const ensureAuthentication = ()=>{
	
	// Grab token from Async storage and store in state
	return async (dispatch)=>{
		const expires = await retrieveFromStorage(EXPIRES_KEY)
		
		//Check if EXPIRES_KEY exists and if token is expired
		if (!expires || Date.now() > parseInt(expires)){
			return logoutUser();
		}
		const token = await retrieveFromStorage(TOKEN_KEY);
		authUser(token, expires);
	}
}