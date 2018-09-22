import React, {Component} from 'react';
import {
  StyleSheet, 
  Text, 
  View,
  Image
} from 'react-native';

import Logo from '../components/Logo';

export default class Login extends Component<> {

	render()
	{
		return(
			<View style={styles.container}>
			<Image  style={{width: 40, height: 70}}
          source={require('../Image/fb_icon.png')}/>				
			<Text style={styles.logoText}>Welcome To My app</Text>

			</View>
			)
	}
}

const styles = StyleSheet.create({
  container: {
	flex: 1,
	justifyContent: 'center'
	alignItems: 'center'
  },
  logoText : {
  	margineVertical: 15,
  	fontSize : 18,
  	color : 'rgba(255, 255, 255, 0.7)'
  }  
});