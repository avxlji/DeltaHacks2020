import React, { Component } from 'react';
import { Text, View } from 'react-native';
import {StyleSheet} from 'react-native';


const {width: WIDTH} = Dimensions.get('window')
export default class TaskPage extends Component {
  render(){
return(

        <View style={styles.row}>
        <Text style={styles.text}>kskjs</Text>
        </View>

    )
  }
}

const styles = StyleSheet.create({
    row: {
        marginTop: 30,
        borderRadius: 15,
        width: 300, 
        height: 70,
        backgroundColor: 'white',
        justifyContent: 'center',
      },
      text:{
    fontWeight: '200',
      marginLeft: 10, 
      },
})