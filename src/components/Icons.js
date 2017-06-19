import React from 'react';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import MAIcons from 'react-native-vector-icons/MaterialIcons';

export const reddit = ({tintColor, focused})=>(
		<FAIcon name="reddit" size={30} style={{color: focused ? '#FF4300': tintColor}}/>
	);
export const search = ({tintColor, focused})=>(
		<FAIcon name="search" size={30} style={{color: tintColor, transform:[{rotate: '360deg'}] }}/>
	);
export const mail =	({tintColor, focused}) =>(
		<EntypoIcon name="mail" size={30} style={{color: tintColor}} />
	);
export const user =	({tintColor, focused})=>(
		<FAIcon name="user" size={30} style={{color: tintColor}}/>
	);

export const arrowUp 	= <EntypoIcon name="arrow-up"  size={15} />
export const arrowDown 	= <EntypoIcon name="arrow-down" size={15} />
export const comment 	= <FAIcon name ="comment" size={15}/>
export const share 		= <EntypoIcon name="share-alternative" size={15} />
export const threeDots 	= <EntypoIcon name="dots-three-horizontal" color="#ccc" size={15} />
export const oneDot		= <EntypoIcon name="dot-single" color="#ccc" size={10} />
export const pencil 	= <FAIcon name="pencil-square" color="#13b89f" size={30} />
export const hot 		= <MAIcons name="whatshot" color="#ccc" size={20} />
export const caret 		= <FAIcon name="caret-down" size={10} />