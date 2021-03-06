import React, { Component } from 'react';
import { Text, View, Dimensions } from 'react-native';
import { StyleSheet, Image, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import imgB from '../assets/sampleBackground1.jpg';
import Icon from 'react-native-vector-icons/Ionicons'

const { width: WIDTH } = Dimensions.get('window')
export default class CreateAccount extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            name: '',
            showPass: true,
            press: false,
        };
    }

    showPass = () => {
        this.setState({
            showPass: this.state.press,
            press: !this.state.press
        })
    }

    onCreateAccount = () => {
        let userData = {
            email: this.state.username,
            password: this.state.password
        }
        fetch('http://172.17.72.207:3000/api/site_users', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData)
        }).then(response => {
            if (response.status == 200) {
                response.json().then(response => {
                    let userDataProfile = {
                        name: this.state.name
                    }
                    fetch(`http://172.17.72.207:3000/api/site_users/${response.id}/profiles`, {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(userDataProfile)
                    }).then(response => {
                        if (response.status === 200) {
                            alert('Account Created Successfully!')
                            this.props.updateScreenIndex(3)
                        }
                    })
                })
            }
        })

    }

    render() {
        return (
            <ImageBackground style={styles.backgroundContainer} source={imgB}>
                <View style={styles.mainContainer}>
                    <View style={styles.logoContainer}>
                        <Image source={{ uri: 'https://i.pinimg.com/originals/58/2e/65/582e6581f45ccac1dcc7cf271e4e88ec.png' }} style={styles.logo} />
                    </View>
                    <Text style={styles.name}>Create Account</Text>
                    <View style={styles.inputContainer}>
                        <Icon name={'ios-person'} size={28} color={'rgba(255, 255, 255, 1)'}
                            style={styles.inputIcon}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder={'Name'}
                            placeholderTextColor={'rgba(255, 255, 255, 1)'}
                            onChangeText={text => this.setState({ name: text })}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Icon name={'ios-person'} size={28} color={'rgba(255, 255, 255, 1)'}
                            style={styles.inputIcon}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder={'Email'}
                            placeholderTextColor={'rgba(255, 255, 255, 1)'}
                            onChangeText={text => this.setState({ username: text })}
                        />
                    </View>
                    <View>
                        <Icon name={'ios-lock'} size={28} color={'rgba(255, 255, 255, 1)'}
                            style={styles.inputIcon}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder={'Password'}
                            secureTextEntry={this.state.showPass}
                            placeholderTextColor={'rgba(255, 255, 255, 1)'}
                            onChangeText={text => this.setState({ password: text })}
                        />

                        <TouchableOpacity style={styles.buttonEye} onPress={this.showPass.bind(this)}>
                            <Icon name={this.state.press == false ? 'ios-eye-off' : 'ios-eye'} size={26} color={'rgba(255, 255, 255, 1)'} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={this.onCreateAccount} style={styles.buttonLogin}>
                            <Text style={styles.text}>Sign Up</Text>
                        </TouchableOpacity>
                        <Text style={styles.haveaccount}>Have an account?</Text>
                        <TouchableOpacity onPress={() => this.props.updateScreenIndex(3)} style={styles.buttonCreateAccount}>
                            <Text style={styles.textCreateAccount}>Sign In</Text>
                        </TouchableOpacity>

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
    name: {
        fontSize: 50,
        fontWeight: "200",
        color: "white",
        textAlign: "center",
    },
    mainContainer: {
        marginBottom: 50,
    },
    logo: {
        width: 120,
        height: 120,
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 30,
    },
    logoText: {
        color: 'white',
        fontSize: 15,
        fontWeight: '200',
        marginTop: 10,
    },
    inputContainer: {
        marginTop: 10,
        marginBottom: 10,
    },
    input: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 25,
        fontSize: 16,
        paddingLeft: 45,
        backgroundColor: 'rgba(0, 0, 0, .35)',
        color: 'rgba(255, 255, 255, 1)',
        marginHorizontal: 25,
    },
    inputIcon: {
        position: 'absolute',
        top: 6,
        left: 37,
    },
    buttonEye: {
        position: 'absolute',
        top: 8,
        right: 37,
    },
    buttonLogin: {
        justifyContent: 'center',
        marginTop: 10,
        width: WIDTH - 55,
        height: 45,
        borderRadius: 25,
        fontSize: 16,
        paddingLeft: 4,
        backgroundColor: 'rgba(0, 0, 0, .3)',
        color: 'rgba(255, 255, 255, 1)',
        marginHorizontal: 25,
        textAlign: "center",
    },
    buttonCreateAccount: {
        justifyContent: 'center',
        marginTop: 10,
        width: WIDTH - 55,
        height: 45,
        borderRadius: 25,
        fontSize: 16,
        paddingLeft: 4,
        backgroundColor: '#e0e0e0',
        marginHorizontal: 25,
        textAlign: "center",
    },
    text: {
        color: 'rgba(255, 255, 255, 1)',
        textAlign: "center",
        fontSize: 15,
        fontWeight: "400",
    },
    textCreateAccount: {
        color: 'rgba(0,0,0, 1)',
        textAlign: "center",
        fontSize: 15,
        fontWeight: "400",
    },
    haveaccount: {
        marginTop: 25,
        marginBottom: 15,
        justifyContent: 'center',
        textAlign: "center",
        fontWeight: "900",
        fontSize: 18,
        color: 'white'
    }

})
