import React from 'react';
import { StyleSheet, Text, View,TextInput, Alert, TouchableOpacity} from 'react-native';
import firebase from 'firebase';
import db from '../config';
import {Header} from 'react-native-elements';

export default class LoginScreen extends React.Component{

    constructor(){
        super();
        this.state = {
            email : '',
            password : ''
        }
    }

    userLogin = (email,password) => {
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(() => {
            return Alert.alert("Successfull Login")
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            return Alert.alert(errorMessage)
        })
    }

    userSignUp = (email,password) => {
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then((response) => {
            Alert.alert("User Added Successfully")
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            return Alert.alert(errorMessage) 
        })
    }

    render(){
        return(
            <View style = {{backgroundColor : 'yellow'}}>
                <Header
                containerStyle = {{backgroundColor : 'cyan'}}
                centerComponent = {{
                    text : 'Barter System App',
                    style : {
                        fontSize : 25,
                        fontWeight : 700
                    }
                }}
                />
                <View>
                <TextInput
                style = {styles.inputBox}
                placeholder = "Email"
                keyboardType = 'email-address'
                onChangeText = {(text) => {
                    this.setState({
                        email : text
                    })
                }}
                />
                 <TextInput
                style = {styles.inputBox}
                secureTextEntry = {true}
                placeholder = "Password"
                onChangeText = {(text) => {
                    this.setState({
                        password : text
                    })
                }} 
                />
                </View>
                <View>
                <TouchableOpacity 
                style = {styles.button}
                onPress = {()=> {
                    this.userLogin(this.state.email,this.state.password)
                }}
                >
                    <Text style ={styles.buttonText}> Login </Text>
                </TouchableOpacity>

                <TouchableOpacity 
                style = {styles.button1}
                onPress = {() => {
                    this.userSignUp(this.state.email,this.state.password)
                }}
                >
                    <Text style = {styles.buttonText}> Sign Up </Text>
                </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inputBox : {
        width : 200,
        height : 50,
        alignSelf : 'center',
        borderWidth : 2,
        marginTop : 30,
        justifyContent : 'center'
    },
    button : {
        width : 200,
        height : 30,
        backgroundColor : 'cyan',
        borderWidth : 2,
        alignSelf : 'center',
        borderRadius : 15,
        marginTop : 30,
        marginRight : 10
           
    },
    button1 : {
        width : 200,
        height : 30,
        backgroundColor : 'cyan',
        borderWidth : 2,
        alignSelf : 'center',
        borderRadius : 15,
        marginRight : 10,
        marginBottom : 255,
        marginTop : 20
    },
    buttonText : {
        textAlign : 'center',
        fontSize : 20
    }
})