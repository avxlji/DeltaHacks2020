import React, { Component } from 'react';
import { Text, View, Dimensions } from 'react-native';
import {StyleSheet,Image, ImageBackground, TextInput, TouchableOpacity} from 'react-native';
import imgB from '../assets/sampleBackground1.jpg';
import { withOrientation } from 'react-navigation';
import Icon from 'react-native-vector-icons/AntDesign'
import img1 from '../assets/Group 1628.jpg'

const {width: WIDTH} = Dimensions.get('window')
export default class TaskPage extends Component {
  render(){
return(

    
    
<ImageBackground source={imgB} style={styles.backgroundContainer}>
<View style={styles.mainContainer}>


    <Text style={styles.name}>Welcome</Text>
    <Text style = {styles.aboutText}>username
    </Text>

    <View style={styles.mainContainer}>

    <Image source={img1} style = {styles.g1}></Image>


    </View>

    </View>
</ImageBackground>

)
  }
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
    width: null,
    height: null,
    //optional
    justifyContent: 'center',
    alignItems: 'center',
  },
  name:{
    fontSize: 50, 
    fontWeight: "200",
    color: "white",
    textAlign: "center",
    marginLeft: 50,
  },
  aboutText:{
    color: 'white',
    width: 300,
    fontSize: 16,
    lineHeight: 25,
    textAlign: "center",
    marginLeft: 170,
  },
  mainContainer:{
    width: 700,
    marginBottom: 50,
    top: -170,
    left: -100,
  },
  g1: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
    //optional
    justifyContent: 'center',
    alignItems: 'center',
  }


})