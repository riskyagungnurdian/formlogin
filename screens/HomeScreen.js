import React from 'react';
import {Alert, StyleSheet, Text, Image, View, TextInput,Button, ImageBackground } from 'react-native';
 
export default class LoginPage extends React.Component{
        state={
            username:'',
            password:''
        }

    render() {
        return (
            <View style={styles.container}> 
                <Image
                style={{width: 75, height: 75}}
                source={{ uri: 'https://reactnative.dev/img/tiny_logo.png'}}
            />
               <Text style={styles.text}>Yalista Travel</Text>
                <TextInput style={styles.username} placeholder="Username" ></TextInput>
                <TextInput style={styles.password} placeholder="Password" ></TextInput>
                <View style={styles.loginButton}>
                    <Button title="Login" onPress={this._onPressLogin} color="#841584" ></Button>
                </View>
            </View>
        );
    }
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image:{
        height:100,
        width:100
    },
    text: {
      alignItems: 'center',
      marginBottom: 10,
      fontSize: 24,
      fontWeight: 'bold',
    },
    username:{
        backgroundColor:'white',
        borderRadius: 5,
        width:'90%',
        padding: 5,
        marginBottom: 10,
    },
    password: {
        backgroundColor: 'white',
        borderRadius: 5,
        width: '90%',
        padding: 5,
        marginBottom: 10,
    },
    loginButton:{
        width:'90%',
        marginBottom: 10,
    }
});