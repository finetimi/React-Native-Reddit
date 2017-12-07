/** 
 * constants that can be used anywhere in the app,
 * all put under one section to prevent collision 
 */
import axios from 'axios';

// API constants
export const APP_ID 			= '327TeSVrOAFLXQ';
export const LOGIN_URI 			= `https://www.reddit.com/api/v1/authorize.compact?client_id=${APP_ID}&response_type=token&state=RANDOM_STRING&redirect_uri=rnreddit://redirectURI&scope=identity%20edit%20flair%20history%20modconfig%20modflair%20modlog%20modposts%20modwiki%20mysubreddits%20privatemessages%20read%20report%20save%20submit%20subscribe%20vote%20wikiedit%20wikiread`;

// Redux Types
export const AUTH_USER 			= 'AUTH_USER';
export const FETCHING_USER_DATA = 'FETCHING_USER_DATA';
export const LOADING_POSTS		= 'LOADING_POSTS';
export const STORE_HOT_POSTS 	= 'STORE_HOT_POSTS';
export const STORE_RANDOM_POSTS = 'STORE_RANDOM_POSTS';
export const STORE_SUBREDDITS	= 'STORE_SUBREDDITS';
export const STORE_USER_DETAILS = 'STORE_USER_DETAILS';

// Axios Object
export class Axios{
	constructor(token){
		this.config = {
			baseURL: 'https://oauth.reddit.com',
			headers: {'Authorization': `bearer ${token}`}
		};
	}
	// initialize get request with a provided path
	get(path){
		return axios.get(path, this.config);
	}
};

export function timeFromNow(epochTime){
	// Get time difference in minutes 
	const timeDelta = Math.floor((Date.now()/1000- epochTime)/60);
	switch(timeDelta){
		// if timedelta is zero return Now
		case timeDelta === 0:
			return 'Now';
		// if timedelta is less than 60 return minutes
		case timeDelta < 60:
			return `${timeDelta}m`;
		// return the hour equivalent
		default:
			const hours = Math.floor(timeDelta/60);
			// If hours is less than 24, return hours else return days
			return hours < 24 ? `${hours}h` : `${Math.floor(hours/24)}d`
	}
};
