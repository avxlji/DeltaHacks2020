import React, { Component } from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';
import imgB from '../assets/sampleBackground10.png';


export default class aboutUs extends Component {
    render() {
        return (
            <ImageBackground source={imgB} style={styles.backgroundContainer}>
                <View style={styles.mainContainer}>


                    <Text style={styles.name}>About</Text>
                    <Text style={styles.aboutText}>
                        We visualize a world where a person with diabetes can live a
                        full and healthy life.
                        We want diabetes to be less troublesome.
                        We put people first.
                    </Text>
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
        justifyContent: 'center',
        alignItems: 'center',
    },
    name: {
        fontSize: 50,
        fontWeight: "200",
        color: "white",
        textAlign: "center",

    },
    aboutText: {
        color: 'white',
        width: 300,
        fontSize: 16,
        marginTop: 80,
        lineHeight: 25,
        textAlign: "center",
    },
    mainContainer: {
        marginBottom: 50,
    },
    logo: {
        width: 170,
        height: 170,
    },
    logob: {
        width: 150,
        height: 150,

    },
    logoContainer: {
        position: "absolute",
        alignItems: 'center',
        marginLeft: 250,
        marginBottom: 100,
    },
    logoContainerb: {
        position: "absolute",
        justifyContent: "center",
        alignItems: 'center',
        alignContent: "center",
        marginTop: 300,
        marginLeft: 60,
    }
})