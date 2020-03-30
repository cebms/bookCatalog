import React, { useState }  from 'react'
import { View, Text, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler'

import styles from './styles'


const Login = () => {
    const navigation = useNavigation()
    const [name, setName] = useState('Guest')
    return(
        <View style={styles.container}>
            <View style={styles.logo}><Image source={require('../../assets/logo.png')}/></View>
            <TextInput
                style={styles.nameInput}
                onChangeText={text => setName(text)}
                placeholder='Insert your name'
            />
            <TouchableOpacity onPress={() => navigation.navigate('Explore', { name: name })}>
                <View style={styles.signUpBtn}>
                    <Text style={styles.buttonText}>Sign-up</Text>
                </View>
            </TouchableOpacity>
        </View>
    )}

export default Login