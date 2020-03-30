import React from 'react'
import { Text, View, Image } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'


import styles from './styles'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Details = () => {
    const navigation = useNavigation()
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => {navigation.goBack()}}>
                <Feather name="arrow-left" size={24} color="#FFF"/>
                </TouchableOpacity>
                <Image source={require('../../assets/logo.png')}/>
            </View>
            <View style={styles.card}>
              <View style={styles.row}>
                <View style={styles.bookCover}>
                    <Image source={require('../../assets/1984Cover.png')}/>
                    <Text style={styles.rating}>4.9/5.0</Text>
                </View>
                <View style={styles.bookInfo}>
                    <Text style={styles.bookTitle}>1984</Text>
                    <Text style={styles.bookAuthor}>George Orwell</Text>
                    <Text style={styles.synopsis}>In 1984, London is a grim city in the totalitarian state of Oceania where Big Brother is always watching you and the Thought Police can practically read your mind.</Text>
                </View>
              </View>
                <View style={styles.buttons}>
                    <TouchableOpacity style={styles.dislikebutton}>
                        <View >
                            <Feather name="thumbs-up" size={28} color="#FFF"/>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.dislikebutton}>
                        <View>
                            <Feather name="thumbs-down" size={28} color="#FFF"/>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            
            <View>
                <TouchableOpacity><View style={styles.button}><Text style={styles.btnText}>Add to my library</Text></View></TouchableOpacity>
                <TouchableOpacity><View style={styles.button}><Text style={styles.btnText}>Buy</Text></View></TouchableOpacity>
            </View>
        </View>
    )}

export default Details