import * as ACTIONS from './constants';
import * as actionCreators from './actionCreators';
import { AsyncStorage } from 'react-native';
export * from './actionCreators';

const TOKEN_KEY = '@ReactNativeReddit:token';


export const saveToken = async(token)=>{
	try {
		await AsyncStorage.setItem(TOKEN_KEY, token)
	} catch (error){
		return console.error(error);
	}
}

export const authUser = (token)=>{
	saveToken(token);
	dispatch(actionCreators.authenticateUser(token));
}