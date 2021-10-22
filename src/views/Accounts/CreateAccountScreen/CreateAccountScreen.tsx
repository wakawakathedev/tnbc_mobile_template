import React from 'react'
import {Text, View} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'

import {Account} from 'thenewboston'
import {Button} from '@ui/Button'
import {TemplateScreen} from '@views/utils/TemplateScreen'
import {
  clearAccounts,
  storeAccountToEncryptedStorage,
  fetchEncryptedAccounts,
} from '@store/Accounts/AccountsSlice'

import {RootState} from '@store/store'

/**
 * Todo
 * - reveal private key (encrypt key in state)
 * - show modal that account was created and added
 */

export const CreateAccountScreen = () => {
  const dispatch = useDispatch()

  const createAccount = async () => {
    const account = new Account()

    const accountPayload = {
      key: account.accountNumberHex,
      account: {
        publicKey: account.accountNumberHex,
        privateKey: account.signingKeyHex,
        nickname: '',
      },
    }
    await dispatch(storeAccountToEncryptedStorage(accountPayload))
  }

  const clear = async () => {
    await dispatch(clearAccounts())
  }

  return (
    <TemplateScreen>
      <>
        <View style={{padding: 10}}>
          <Button onPress={createAccount} title="Create Account" />
          <Button onPress={clear} title="Remove All Accounts" />
        </View>
      </>
    </TemplateScreen>
  )
}
