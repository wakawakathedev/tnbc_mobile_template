import React, {useState} from 'react'
import {Pressable, StyleSheet, Text, View} from 'react-native'
import EncryptedStorage from 'react-native-encrypted-storage'

import {Account} from 'thenewboston'
import {TemplateScreen} from '../utils/TemplateScreen'
import {FlatUIColors} from '../../ui/Colors'
import {Button} from '../../ui/Button'

type AccountNumber = string | undefined
type Key = string | undefined

/**
 * Todo
 * - create account
 * - reveal private key (encrypt key in state)
 * - add account to wallet
 */

export const CreateAccountScreen = () => {
  const [accountNumber, setAccountNumber] = useState<AccountNumber>(undefined)
  const [privateKey, setPrivateKey] = useState<Key>(undefined)
  const [showPrivateKey, toggleVisibility] = useState<Boolean>(false)
  const [hasCreatedAccount, setHasCreated] = useState<Boolean>(false)

  const createAccount = () => {
    const account = new Account()
    setAccountNumber(account.accountNumberHex)
    setPrivateKey(account.signingKeyHex)
    toggleVisibility(false)
    setHasCreated(true)
  }

  const addAccount = async () => {
    console.log('accounts')
    try {
      await EncryptedStorage.setItem(
        'accounts',
        JSON.stringify({
          [`${accountNumber}`]: privateKey,
        }),
      )
      console.log('done?')
    } catch (error) {
      console.log('error?', error)
      // There was an error on the native side
    }
  }

  const togglePrivateKey = () => {
    toggleVisibility(!showPrivateKey)
  }

  return (
    <TemplateScreen>
      <View style={{padding: 20}}>
        <View
          style={{
            paddingTop: 20,
            paddingHorizontal: 8,
            justifyContent: 'center',
            backgroundColor: FlatUIColors.clouds,
            borderColor: FlatUIColors.concrete,
            borderWidth: 1,
          }}>
          <View style={{paddingBottom: 20}}>
            <Text>Account:</Text>
            <Text
              selectable={true}
              style={{
                fontSize: 12,
                flexWrap: 'wrap',
                width: '100%',
                flexShrink: 1,
              }}>
              {accountNumber}
            </Text>
          </View>

          {privateKey && (
            <View style={{paddingBottom: 20}}>
              <Pressable onPress={togglePrivateKey}>
                <Text>Touch to reveal private key.</Text>
                <Text>Do not Reveal this key to anyone.</Text>
              </Pressable>
            </View>
          )}

          {showPrivateKey && (
            <View style={{paddingBottom: 20}}>
              <Text style={{fontSize: 12, flexWrap: 'wrap', width: '80%'}}>
                ***
              </Text>
            </View>
          )}

          {hasCreatedAccount && (
            <View style={{paddingBottom: 20}}>
              <Button title="Add Account" onPress={addAccount} />
            </View>
          )}
        </View>
      </View>

      <View style={{paddingVertical: 10}}>
        <Button title="Create Account" onPress={createAccount} />
      </View>
    </TemplateScreen>
  )
}
