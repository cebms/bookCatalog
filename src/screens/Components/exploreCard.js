import React from 'react'
import { View, Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

import styles from '../Explore/styles'


const BookCard = ({ coverSrc, title, author, rating }) => {
    const navigation = useNavigation()
    return(
    <View style={styles.card}>
                <View style={styles.bookCover}>
                    <Image source={ coverSrc } />
                </View>
                <View style={styles.bookAction}>
                <View style={styles.bookInfo}>
                    <Text style={styles.bookTitle}>{ title }</Text>
                    <Text style={styles.bookAuthor}>{ author }</Text>
                    <Text style={styles.bookRating}>{ rating }/5.0</Text>
                </View>
                <TouchableOpacity onPress={() => { navigation.navigate('Details') }} >
                    <View style={styles.detailsButton}>
                        <Text style={styles.detailsButtonText}>See details</Text>
                        <Feather name="arrow-right" color='#2f2BAD' size={24}/>
                    </View>
                </TouchableOpacity>
                </View>
            </View>
    )}

export default BookCard