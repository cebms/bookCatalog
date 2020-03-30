import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Explore from './screens/Explore/index'
import Details from './screens/Details/index'
import Login from './screens/Login/index'

const Routes = () => {

    const Stack = createStackNavigator()

    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Login"component={ Login }/>
                <Stack.Screen name ="Explore" component={ Explore }/>
                <Stack.Screen name="Details" component={ Details }/>
            </Stack.Navigator>
        </NavigationContainer>
       
    )}

export default Routes