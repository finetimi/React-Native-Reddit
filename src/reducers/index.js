import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import UserReducer from './UserReducer';

const rootReducer = combineReducers({
	AuthReducer,
	UserReducer
})

export default rootReducer;