/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  StyleSheet, 
  Text, 
  View,
  StatusBar
} from 'react-native';

// import Login from './src/pages/Login';
// import Signup from './src/pages/Signup';
// // const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// type Props = {};
import Routes from './src/Routes';

export default class App extends Component<{}> {    //<Props>
  render() {
    return (
      <View style={styles.container}>
      <StatusBar
        backgroundColor="#1c313a"
        barStyle="light-content"
   />
<Routes/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {

    backgroundColor: '#455a64',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }  
});
