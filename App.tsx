import React, {FC, useEffect} from 'react'
import {Provider, useDispatch} from 'react-redux'
import {RootNavigator} from '@navigation/RootNavigator'
import {store} from '@store/store'
import {
  fetchAllBalances,
  fetchEncryptedAccounts,
} from '@store/Accounts/AccountsSlice'

/**
 * todo:
 * add login/auth (passcode/biometric)
 */

const InitializeApp: FC = ({children}) => {
  const dispatch = useDispatch()

  const getStoredAccounts = async () => {
    await dispatch(fetchEncryptedAccounts())
    await dispatch(fetchAllBalances())
  }

  useEffect(() => {
    getStoredAccounts()
  }, [])
  return <>{children}</>
}
const App = () => {
  return (
    <Provider store={store}>
      <InitializeApp>
        <RootNavigator />
      </InitializeApp>
    </Provider>
  )
}

export default App
