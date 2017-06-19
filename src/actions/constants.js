/* constatns that can be used anywhere in the app,
all put under one section to prevent collision */

// API constants
export const APP_ID 	= '327TeSVrOAFLXQ';
export const LOGIN_URI 	= `https://www.reddit.com/api/v1/authorize.compact?client_id=${APP_ID}&response_type=token&state=RANDOM_STRING&redirect_uri=rnreddit://redirectURI&scope=read`;

// Redux Types
export const FETCHING_USER_DATA = 'FETCHING_USER_DATA';
export const AUTH_USER 			= 'AUTH_USER';
