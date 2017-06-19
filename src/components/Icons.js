import React from 'react';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import EntypoIcon from 'react-native-vector-icons/Entypo';

export const reddit = ({tintColor, focused})=>(
		<FAIcon name="reddit" size={30} style={{color: focused ? '#FF4300': tintColor}}/>
	)

export const search =({tintColor, focused})=>(
		<FAIcon name="search" size={30} style={{color: tintColor, transform:[{rotate: '360deg'}] }}/>
	)
export const mail =({tintColor, focused}) =>(
		<EntypoIcon name="mail" size={30} style={{color: tintColor}} />
	)
export const user =({tintColor, focused})=>(
		<FAIcon name="user" size={30} style={{color: tintColor}}/>
	)
