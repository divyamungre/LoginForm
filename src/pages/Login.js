import React, {Component} from 'react';
import {
  StyleSheet, 
  Text, 
  View,
  StatusBar
} from 'react-native';

import Logo from '../Component/Logo';
import Form from '../Component/Form';

export default class Login extends Component<> {

	render()
	{
		return(
			<View style={styles.container}>
				<Logo/>
				<Form type="Login"/>
				<View style={styles.signupTextCont}>

					<Text style={styles.signupText}>Don't have an account yet? Signup</Text>
					<Text>Signup</Text>

										<Text style={styles.signupButton}>Login</Text>

					</View>
			</View>
			)
	}
}

const styles = StyleSheet.create({
  container: {

    backgroundColor: '#455a64',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }, 

  signupTextCont: {
    flexGrow: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingVertical: 16,
    flexDirection:'row'

  },

  signupText: {

  	color: 'rgba(255,255,255,0.6)',
  	fontSize:16
  },
  signupButton:{

  	color:'#fffff',
  	fontSize: 16,
  	fontWeight:'500',

  }
});