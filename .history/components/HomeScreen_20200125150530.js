import React, { Component } from 'react';
import { Text, View } from 'react-native';
import {Platform, StyleSheet} from 'react-native';


export default class HomeScreen extends Component {
  render(){
return(
<View style={styles.container}>
<Image source={require('./img/check.png')} />
<Text>
no u
</Text>
</View>
)
  }
}

const styles = StyleSheet.create({
    container: {
        color: '#ffffff',
        backgroundColor: '#fff',
        flex: 1,
      },
})