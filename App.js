import React, {useState} from 'react'
import { View, Text } from 'react-native'
import Routes from './src/routes'
import { AppLoading } from 'expo'
import * as Fonts from 'expo-font'
/*const App = () => {
  return(
      <Routes />
  )}

  export default App*/
  const fetchFonts = () => {
    return Fonts.loadAsync({
      'nunito-bold': require('./src/assets/fonts/Nunito/Nunito-Bold.ttf'),
    })
  }

  export default function App() {
    const[dataLoaded, setDataloaded] = useState(false)

    if(!dataLoaded){
      return(
        <AppLoading
          startAsync={fetchFonts}
          onFinish={() => setDataloaded(true)}
        />
      )
    }
    return(
      <Routes />
    )
  }