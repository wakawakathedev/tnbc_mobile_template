import React from 'react'
import {Provider} from 'react-redux'
import {RootNavigator} from '@navigation/RootNavigator'
import {store} from '@store/store'

/**
 * todo:
 * add login/auth (passcode/biometric)
 */
const App = () => {
  return (
    <Provider store={store}>
      <RootNavigator></RootNavigator>
    </Provider>
  )
}

export default App
