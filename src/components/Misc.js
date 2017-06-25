import React from 'react';
import { Card, SearchBar } from 'react-native-elements';
import * as Icons from './Icons';
import { 
	View,
	TouchableWithoutFeedback,
	StyleSheet,
	Text
	} from 'react-native'; 

export const NewPost = () =>{
	return (
			<Card containerStyle={style.container} >
				<View style={style.placeHolder}>
				 	<Text> {Icons.pencil} </Text>
				 	<View style={{marginTop: 2}}>
				 		<Text style={style.placeHolderText}> u/theUnredditor </Text>
				 		<Text style={style.placeHolderText}> Post something interesting </Text>
				 	</View>
				 </View>
			</Card>
		)
}
export const SortButton = () =>(
	 <TouchableWithoutFeedback>
	 	<View style={style.filter}>
	 		<Text> {Icons.hot} </Text>
	 		<Text style={style.filterText}> HOT POSTS {'  '}{Icons.caret} </Text>
	 	</View>
	 </TouchableWithoutFeedback>
	 );

export const SearchReddit =()=>(
		<SearchBar 
			lightTheme
			inputStyle={style.searchInput}
			containerStyle={style.searchContainer} 
			placeholder='Find a community or post' />
	);

const style = StyleSheet.create({
	container:{
		marginVertical: 5,
		marginHorizontal: 0,
		borderColor: '#fff',
		paddingVertical: 5,
	},
	placeHolder:{
		flexDirection: 'row',
		justifyContent: 'flex-start',
	},
	placeHolderText: {
		color: 'grey',
		fontSize: 11,
	},
	filter:{
		flexDirection: 'row',
		marginVertical: 5
	},
	filterText: {
		fontSize:10,
		fontWeight: '500',
		color: 'grey',
		marginTop: 5
	},
	searchContainer:{
		backgroundColor: '#fff',
		marginTop:30
	},
	searchInput:{
		backgroundColor: '#ccc',
		alignContent: 'center'
	}
})