import React from 'react'
import { Text,View,Image } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

import styles from './styles'
import BookCard from '../Components/exploreCard'

import data from './data'

const covers = [
    {
        coverSrc: require('../../assets/1984Cover.png')
    },
    {
        coverSrc:  require('../../assets/ClockWorkCover.png')
    },
    {
        coverSrc:  require('../../assets/flowersCover.png')
    }
]
    //cover:  require('../../assets/1984Cover.png')
    //cover:  require('../../assets/ClockWorkCover.png')
    //cover:  require('../../assets/flowersCover.png')


const Explore = ({ route }) => {
    const books = data.books
    const { name } = route.params
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../../assets/logo.png')}/>
            </View>
            <View>
                <Text style={styles.welcome}>Welcome, {name}!</Text>
                <Text style={styles.welcome}>{}</Text>
            </View>

            <FlatList
                showsVerticalScrollIndicator={false}
                data={books}
                keyExtractor={(item) =>  item.name }
                renderItem={( element ) => {return( 
                    <BookCard
                        title=  { element.item.name }
                        author= { element.item.author }
                        rating= { element.item.rating }
                        coverSrc={ covers[element.index].coverSrc }
                    />
                )}}
             />
            
            
        </View>
)}

export default Explore