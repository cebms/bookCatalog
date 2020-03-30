import React from 'react'
import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        paddingTop: Constants.statusBarHeight + 10,
        padding: 12
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    card: {
        backgroundColor: '#FFF',
        padding: 12,
        borderRadius: 20,
        marginBottom: 30
    },
    row: {
        flexDirection: 'row'
    },
    bookCover: {
        marginRight: 10, 
    },
    synopsis: {
        textAlign: 'justify',
        justifyContent: 'center',
        paddingRight: '40%',
        lineHeight: 25,
        fontFamily: 'nunito-bold'
    },
    rating: {
        marginTop: '10%',
        marginBottom: '10%',
        fontFamily: 'nunito-bold'
    },
    buttons: {
        paddingLeft: '10%',
        paddingRight: '10%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    likebutton: {
        backgroundColor: "#F71568",
        padding: "5%",
        borderRadius: 50
    },
    dislikebutton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#F71568",
        padding: 14,
        borderRadius: 50
        
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#F71568",
        padding: 15,
        marginBottom: 20,
        borderRadius: 30
    },
    btnText: {
        color: '#FFF',
        fontFamily: 'nunito-bold',
        fontSize: 20
    },
    bookTitle: {
        fontSize: 24,
        fontFamily: 'nunito-bold'
    },
    bookAuthor: {
        fontFamily: 'nunito-bold',
        fontSize: 18
    }
    })

    export default styles