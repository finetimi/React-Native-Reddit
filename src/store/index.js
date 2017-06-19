// @flow
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';

const middleware = [ thunk ];
// if (process.env.NODE_ENV !== 'production'){
// 	import '../config/Reactotron';
// }

export default ()=>{
	const store = createStore(reducer, applyMiddleware(...middleware));
	return store;
}

