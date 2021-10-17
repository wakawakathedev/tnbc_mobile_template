import React, {useState} from 'react'
import {Text, TextInput, View} from 'react-native'
import {useSelector, useDispatch} from 'react-redux'

import {Account} from 'thenewboston'
import {Button} from '@ui/Button'

import {TemplateScreen} from '@views/utils/TemplateScreen'

import {storeAccountToEncryptedStorage} from '@store/Accounts/AccountsSlice'

export const ImportAccountScreen = () => {
  const [importKey, setImportKey] = useState<string>('')
  const [nickname, setNickname] = useState<string>('')

  const dispatch = useDispatch()

  const importAccount = async () => {
    const account = new Account(importKey)

    const accountPayload = {
      key: account.accountNumberHex,
      account: {
        publicKey: account.accountNumberHex,
        privateKey: account.signingKeyHex,
        nickname: nickname,
      },
    }

    await dispatch(storeAccountToEncryptedStorage(accountPayload))
  }

  return (
    <TemplateScreen>
      <>
        <View style={{padding: 10}}>
          <Text>import</Text>
          <TextInput
            style={{
              borderBottomColor: 'black',
              borderWidth: 1,
              width: '100%',
              padding: 10,
            }}
            value={importKey}
            onChangeText={text => setImportKey(text)}
          />
        </View>
        <View style={{padding: 10}}>
          <Text>Nickname</Text>
          <TextInput
            style={{
              borderBottomColor: 'black',
              borderWidth: 1,
              width: '100%',
              padding: 10,
            }}
            value={nickname}
            onChangeText={text => setNickname(text)}
          />
        </View>
        <View style={{padding: 10}}>
          <Button onPress={importAccount} title="Import Account" />
        </View>
      </>
    </TemplateScreen>
  )
}
