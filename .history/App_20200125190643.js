import React, { Component } from 'react';
import { Text, View} from 'react-native';
import HomeScreen from './components/HomeScreen'
import LoginPage from './components/LoginPage'
import Navigate from './components/Navigate'
import {Platform, StyleSheet} from 'react-native';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import Icon from 'react-native-vector-icons/MaterialIcons';  //for accessing the pre-defined icons


class Login extends Component {
  render(){
return(
<LoginPage></LoginPage>
)
  }
}

class About extends Component {
  render(){
return(
<Text>ksnns</Text>
)
  }
}

class Tracking extends Component {
  render(){
return(
<Text>kajkjs</Text>
)
  }
}

export default createMaterialBottomTabNavigator({
Login: {screen: Login},
About: {screen: About},
Tracking: {screen: Tracking}, 
}, {
initalRouteName: 'Login', order: ['Login', 'About', 'Tracking']


})

const styles = StyleSheet.create({
  container: {
      borderRadius: 4,
      borderWidth: 0.5,
      borderColor: '#d6d7da',
      backgroundColor: '#ffffff',
      flex: 1,
    },
})