import * as ACTIONS from './constants';
import * as actionCreators from './actionCreators';
import { AsyncStorage } from 'react-native';
export * from './actionCreators';

const TOKEN_KEY = '@ReactNativeReddit:token';

const saveToken = async(token)=>{
	try {
		await AsyncStorage.setItem(TOKEN_KEY, token)
	} catch (error){
		return console.error(error);
	}
}

export const authUser = (token)=>{
	// Save token to AsyncStorage then save to redux state
	return (dispatch) =>{
		saveToken(token)
			.then(dispatch(actionCreators.authenticateUser(token)))
			.catch(err=>console.error(err));
	}
}

export const ensureAuthentication =()=>{
	
}