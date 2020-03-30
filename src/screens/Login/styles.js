import React from 'react'
import { StyleSheet } from 'react-native' 
import Constants from 'expo-constants'

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingTop: Constants.statusBarHeight + 10,
        backgroundColor: '#121212',
        justifyContent: 'center',
        alignItems: 'center'
    },
    nameInput: {
        fontFamily: 'nunito-bold',
        padding: 10,
        paddingHorizontal: 40,
        borderColor: '#FFF',
        borderWidth: 1,
        borderRadius: 20,
        color: '#BBB',
        marginBottom: '5%'
    },
    buttonText: {
        color: '#FFF',
        fontFamily: 'nunito-bold',
        fontSize: 18
    },
    signUpBtn: {
        backgroundColor: '#F71568',
        padding: 10,
        paddingHorizontal: 50,
        borderRadius: 20
    },
    logo: {
        marginBottom: 30
    }
})
export default styles