import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        paddingTop: Constants.statusBarHeight + 5,
        paddingHorizontal: 24,
    },
    welcome: {
        color: '#909090',
        marginBottom: 10,
        fontSize: 16,
        fontFamily: 'nunito-bold'
    },
    header: {
        alignItems: 'center',
        marginBottom: 10
    },
    card: {
        flexDirection: 'row',
        padding: 12,
        backgroundColor: "#FFF",
        marginBottom: 16,
        borderRadius: 16
    },
    bookAction: {
        flex: 1,
        flexDirection: 'column'
    },
    detailsButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '35%',
    },
    detailsButtonText: {
        color: '#2f2bad',
        fontSize: 20,
        fontFamily: 'nunito-bold'
    },
    bookCover: {
        marginRight: 10
    },
    bookTitle: {
        fontSize: 24,
        fontFamily: 'nunito-bold'
    },
    bookAuthor: {
        fontSize: 18,
        color: '#41414D',
        fontFamily: 'nunito-bold'
    },
    bookRating: {
        fontSize: 18,
        color: '#41414D',
        marginTop: 12,
        fontFamily: 'nunito-bold'
    }

})


export default styles