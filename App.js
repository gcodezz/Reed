import React from 'react'
import  { enableScreens } from 'react-native-screens'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { useFonts } from 'expo-font'

import ReedNavigator from './navigation/ReedNavigation'

enableScreens()

const rootReducer = combineReducers({
  
})

// const store = createStore(rootReducer)

export default function App() {
  const [loaded] = useFonts({
    OpenSansCondensedBold: require('./assets/fonts/OpenSansCondensed-Bold.ttf'),
    RubikBold: require('./assets/fonts/Rubik-Bold.ttf')
  });
  
  if (!loaded) {
    return null
  }
  return (
    // <Provider store={store}>
      <ReedNavigator />
    // </Provider>
  )
}
