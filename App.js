import React from 'react'
import  { enableScreens } from 'react-native-screens'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { useFonts } from 'expo-font'
import ReduxThunk from 'redux-thunk'
import { LogBox } from 'react-native'
// import { composeWithDevTools } from 'redux-devtools-extension'

import ReedNavigator from './navigation/ReedNavigation'
import addressReducer from './store/reducers/address'
import newsReducer from './store/reducers/news'

enableScreens()

const rootReducer = combineReducers({
  address: addressReducer,
  news: newsReducer
})

const store = createStore(rootReducer, applyMiddleware(ReduxThunk))

export default function App() {
  LogBox.ignoreAllLogs()
  const [loaded] = useFonts({
    KarlaBold: require('./assets/fonts/Karla-Bold.ttf'),
    KarlaMedium: require('./assets/fonts/Karla-Medium.ttf'),
    KarlaRegular: require('./assets/fonts/Karla-Regular.ttf'),
    KarlaLight: require('./assets/fonts/Karla-Light.ttf')
  })
  
  if (!loaded) {
    return null
  }
  return (
    <Provider store={store}>
      <ReedNavigator />
    </Provider>
  )
}
