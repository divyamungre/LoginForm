import React, {Component} from 'react';
import {
  StyleSheet, 
  Text, 
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

export default class Login extends Component<> {

	render()
	{
		return(
			<View style={styles.container}>
			
			<TextInput style={styles.inputBox} 
			underlineColorAndroid='rgba(0,0,0,0)' 
			placeholder="Email" 
			placeholderTextColor="#ffffff"
			selectionColor='#fff'
			keyboardType='email-address'
			onSubmitEditing={()=> this.password.focus()}/>

			<TextInput style={styles.inputBox} 
			underlineColorAndroid='rgba(0,0,0,0)' 
			placeholder="Password" 
			secureTextEntry={true}
			placeholderTextColor="#ffffff"
			ref={(input) => this.password = input}/>


				<TouchableOpacity style={styles.button}>
					<Text style={styles.buttonText}>{this.props.type}</Text>
				</TouchableOpacity>
			</View>
			)
	}
}

const styles = StyleSheet.create({
  container: {
	flex: 1,
	justifyContent: 'center',
	alignItems: 'center'
  },
  inputBox: {
backgroundColor: 'rgba(255, 255, 255, 0.2)',
  	width: 300,
  	borderRadius: 25,
  	paddingHorizontal:16,
  	fontSize:16,
  	color:'#ffffff',
  	margineVertical:10
  },

  button:{
  	backgroundColor: '#1c313a')',
  	borderRadius: 25,
  	width: 300,
	paddingVertical:12
  	margineVertical:10

  },

buttonText:{

	fontSize:16,
	fontWeight:500,
	color:'#ffffff',
	textAlign:'center'
}

});