import React from 'react';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import MAIcons from 'react-native-vector-icons/MaterialIcons';
import SLIcons from 'react-native-vector-icons/SimpleLineIcons';
import { View } from 'react-native';
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

export const arrowUp 	= <EntypoIcon 	name="arrow-up"  size={15} />
export const arrowDown 	= <EntypoIcon 	name="arrow-down" size={15} />
export const comment 	= <FAIcon 		name ="comment" size={15}/>
export const share 		= <EntypoIcon 	name="share-alternative" size={15} />
export const threeDots 	= <EntypoIcon 	name="dots-three-horizontal" color="#ccc" size={15} />
export const oneDot		= <EntypoIcon 	name="dot-single" color="#ccc" size={10} />
export const pencil 	= <FAIcon 		name="pencil-square" color="#13b89f" size={30} />
export const hot 		= <MAIcons 		name="whatshot" color="#ccc" size={20} />
export const caret 		= <FAIcon 		name="caret-down" size={10} />
export const explore 	= <FAIcon 		name="wpexplorer" size={30} color="#000" style={{ transform:[{rotateY: '180 deg'}] }}/>
export const popular  	= <MAIcons 		name="trending-up" size={30} color="#000" />
export const all = ()=> <SLIcons name="chart" size={30} color="#000" /> 