import React from 'react'
import  { enableScreens } from 'react-native-screens'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { useFonts } from 'expo-font'
import ReduxThunk from 'redux-thunk'
// import { composeWithDevTools } from 'redux-devtools-extension'

import ReedNavigator from './navigation/ReedNavigation'
import addressReducer from './store/reducer'

enableScreens()

const rootReducer = combineReducers({
  address: addressReducer
})

const store = createStore(rootReducer, applyMiddleware(ReduxThunk))

export default function App() {
  const [loaded] = useFonts({
    OpenSansCondensedBold: require('./assets/fonts/OpenSansCondensed-Bold.ttf'),
    RubikBold: require('./assets/fonts/Rubik-Bold.ttf')
  });
  
  if (!loaded) {
    return null
  }
  return (
    <Provider store={store}>
      <ReedNavigator />
    </Provider>
  )
}
