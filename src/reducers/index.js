import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import PostReducer from './PostReducer';

const rootReducer = combineReducers({
	AuthReducer,
	PostReducer
})

export default rootReducer;