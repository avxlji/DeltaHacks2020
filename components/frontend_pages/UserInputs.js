import React, { Component } from 'react';
import { Text, View } from 'react-native';
import {StyleSheet} from 'react-native';



export default class RowItem extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
          GLindex: '',
          GLvalue: '',
          meal: '',
          loading: false
        };
    }

  gettingData = (GLindex, GLvalue, meal) => {
  const data = 
  {
      GLindex: GLindex,
      GLvalue: GLvalue,
      meal:meal
  }



  }

        

  render(){
    if (this.state.GLindex>=18){
            
    }
return(

        <View style={styles.row}>
        <Text style={styles.text}>Meal X</Text>

        <View style = {styles.displayIndex}>
        <Text style={styles.text2}>GLindex: 99</Text>
        <Text style={styles.text2}>GLindex: 80</Text>
        {!this.state.loading ?
            <Text onPress={this.gettingData}>Submit</Text>
            :
            <Loading size={'large'} />
        }
        </View>
        </View>
       

    )
  }
}

const styles = StyleSheet.create({
    row: {
        marginTop: 30,
        borderRadius: 15,
        width: 300, 
        height: 100,
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        alignItems: "center",

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 7 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
      },
      text:{
          fontSize: 16,
    fontWeight: '200',
      marginLeft: 10, 
      },
      displayIndex: {
        display: "flex",
        flexDirection: "column",
      },
      text2:{
        fontSize: 16,
        fontWeight: '200',
        marginLeft: 148,
    },
})