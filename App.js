import React from 'react'
import  { enableScreens } from 'react-native-screens'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import ReedNavigator from './navigation/ReedNavigation'

enableScreens()

const rootReducer = combineReducers({
  
})

const store = createStore(rootReducer)

export default function App() {
  return (
    <Provider store={store}>
      <ReedNavigator />
    </Provider>
  )
}
