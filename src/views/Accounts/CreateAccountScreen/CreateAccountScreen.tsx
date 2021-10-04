import React from 'react'
import {View} from 'react-native'
import {useSelector, useDispatch} from 'react-redux'

import {Account} from 'thenewboston'
import {Button} from '@ui/Button'
import {TemplateScreen} from '@views/utils/TemplateScreen'
import {RootState} from '@store/store'
import {addAccount} from '@features/Accounts/AccountSlice'

/**
 * Todo
 * - reveal private key (encrypt key in state)
 * - show modal that account was created and added
 */

export const CreateAccountScreen = () => {
  const dispatch = useDispatch()

  const createAccount = () => {
    const account = new Account()

    dispatch(
      addAccount({
        key: account.accountNumberHex,
        account: {
          publicKey: account.accountNumberHex,
          privateKey: account.signingKeyHex,
          nickname: '',
        },
      }),
    )
  }

  return (
    <TemplateScreen>
      <>
        <View style={{padding: 10}}>
          <Button onPress={createAccount} title="Create Account" />
        </View>
      </>
    </TemplateScreen>
  )
}
