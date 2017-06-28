import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import MAIcons from 'react-native-vector-icons/MaterialIcons';
import SLIcons from 'react-native-vector-icons/SimpleLineIcons';
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Image, Text } from 'react-native';

export const reddit = ({tintColor, focused})=>(
		<FAIcon name="reddit" size={30} style={{color: focused ? '#FF4300': tintColor}}/>
	);
export const search = ({tintColor, focused})=>(
		<FAIcon name="search" size={30} style={{color: tintColor, transform:[{rotate: '90deg'}] }}/>
	);
export const mail =	({tintColor, focused}) =>(
		<EntypoIcon name="mail" size={30} style={{color: tintColor}} />
	);
export const user =	({tintColor, focused})=>(
		<FAIcon name="user" size={30} style={{color: tintColor}}/>
	);

// Icons for Reddit posts
export const arrowUp 	= <EntypoIcon 	name="arrow-up"  			   size={15} />
export const arrowDown 	= <EntypoIcon 	name="arrow-down" 			   size={15} />
export const comment 	= <FAIcon 		name ="comment" 			   size={15} />
export const share 		= <EntypoIcon 	name="share-alternative" 	   size={15} />
export const threeDots 	= <EntypoIcon 	name="dots-three-horizontal"   size={15} color="#ccc" />
export const oneDot		= <EntypoIcon 	name="dot-single" color="#ccc" size={10} />

// Icon for New Post and Post filtering
export const SqPencil 	= <FAIcon 		name="pencil-square" size={30} color="#13b89f" />
export const hot 		= <MAIcons 		name="whatshot" 	 size={20} color="#ccc" />
export const caret 		= <FAIcon 		name="caret-down" 	 size={10} />

// Icons for Inbox Header
export const pencil 	= <FAIcon 		name="pencil" color="#ccc" size={20} style={{marginHorizontal: 20}} />
export const tasks		= <MAIcons 		name="playlist-add-check"  size={30} style={{marginHorizontal: 20}} color="#ccc"/>

// Icons for Search
export const star 		= <EntypoIcon	name="star" size = {20} color="#ccc" style={{marginRight: 25}} />
export let explore 		= FAIcon.getImageSource('wpexplorer', 30, '#fff').then(source=> explore = source);
export let all			= EntypoIcon.getImageSource('bar-graph', 20, '#fff').then(source=> all = source); 
export let popular		= MAIcons.getImageSource('trending-up', 30, '#fff').then(source=> popular = source);

// Icons for Account 
export const settings 	= <Ionicons 	name ="ios-settings" size={25} color="#ccc" style={{marginRight: 20}} />
export const history 	= {type: "material-community", 	name:"timelapse", 				size:20}
export const bookmark 	= {type: "Entypo", 				name: "bookmark",				size:20}
export const upvote		= {type: "material-community", 	name: "arrow-up-bold-circle", 	size:20}
export const account 	= {type: "MaterialIcons", 		name: "account-circle",			size:20}
export const ban		= {type: "font-awesome", 		name: "ban",					size:20}
export const myComments = {type: "material-community", 	name: "comment", 				size:20}
export const myPosts	= {type: "font-awesome", 		name: "pencil-square",					size:20}
