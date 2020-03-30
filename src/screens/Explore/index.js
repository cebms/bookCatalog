import React from 'react'
import { Text,View,Image } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

import styles from './styles'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Explore = ({ route }) => {
    const navigation = useNavigation()
    const { name } = route.params
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../../assets/logo.png')}/>
            </View>
            <View><Text style={styles.welcome}>Welcome, {name}!</Text></View>

            <View style={styles.card}>
                <View style={styles.bookCover}>
                    <Image source={require('../../assets/1984Cover.png')}/>
                </View>
                <View style={styles.bookAction}>
                <View style={styles.bookInfo}>
                    <Text style={styles.bookTitle}>1984</Text>
                    <Text style={styles.bookAuthor}>George Orwell</Text>
                    <Text style={styles.bookRating}>4.9/5.0</Text>
                </View>
                <TouchableOpacity onPress={() => { navigation.navigate('Details') }} >
                    <View style={styles.detailsButton}>
                        <Text style={styles.detailsButtonText}>See details</Text>
                        <Feather name="arrow-right" color='#2f2BAD' size={24}/>
                    </View>
                </TouchableOpacity>
                </View>
            </View>

            <View style={styles.card}>
                <View style={styles.bookCover}>
                    <Image source={require('../../assets/ClockWorkCover.png')}/>
                </View>
                <View style={styles.bookAction}>
                <View style={styles.bookInfo}>
                    <Text style={styles.bookTitle}>Clockwork Orange</Text>
                    <Text style={styles.bookAuthor}>Anthony Burgess</Text>
                    <Text style={styles.bookRating}>4.4/5.0</Text>
                </View>
                <TouchableOpacity onPress={() => {}} >
                    <View style={styles.detailsButton}>
                        <Text style={styles.detailsButtonText}>See details</Text>
                        <Feather name="arrow-right" color='#2f2BAD' size={24}/>
                    </View>
                </TouchableOpacity>
                </View>
            </View>

            
        </View>
)}

export default Explore