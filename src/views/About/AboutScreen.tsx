import {NativeStackScreenProps} from '@react-navigation/native-stack'
import React, {useEffect, useState} from 'react'
import {FlatList, Pressable, Text, View} from 'react-native'
import EncryptedStorage from 'react-native-encrypted-storage'
import Icon from 'react-native-vector-icons/Feather'

import {Button} from '../../ui/Button'
import {TemplateScreen} from '../utils/TemplateScreen'
import {Routes, AccountStackParams} from '../../navigation/Routes'
import {styles} from '../Accounts/styles'

type Props = NativeStackScreenProps<AccountStackParams, 'AccountOverview'>
type Route = Routes.CreateAccount | Routes.SendCoins

type AccountItem = {
  title: string
  destination: Route
}

const AccountItems: AccountItem[] = [
  {
    title: 'Create Account',
    destination: Routes.CreateAccount,
  },
  {
    title: 'Send Coins',
    destination: Routes.SendCoins,
  },
]

/**
 * todo
 * - show/hide wallet balance
 * - show/hide total balance
 * - export all as plaintext
 * - export all as encrypted plaintext + password
 * - export wallets as higher order object + salt (mnemonic)
 *
 * - add bank (add default)
 * - add own bank
 * - use test net
 *
 * - check wallet transactions
 * - set destination wallets as restricted (blocked)
 * - lock wallet (requires second auth)
 *
 * - send coins, set bank, set memo
 * - use qr code for public address
 */

export const AccountOverviewScreen = ({navigation}: Props) => {
  const [accounts, setAccounts] = useState<any>(undefined)
  const navigateTo = (destination: Route) => {
    navigation.navigate(destination)
  }

  const clearAccounts = async () => {
    try {
      await EncryptedStorage.clear()
      setAccounts(undefined)
    } catch (error) {
      // handle error
    }
  }
  const retrieveAccounts = async () => {
    try {
      const _data = await EncryptedStorage.getItem('accounts')
      setAccounts(_data)
    } catch (error) {
      // There was an error on the native side
    }
  }

  useEffect(() => {
    retrieveAccounts()
  }, [accounts])

  const AccountItem = ({item}: {item: AccountItem}) => {
    return (
      <Pressable
        onPress={() => navigateTo(item.destination)}
        style={({pressed}) => [{opacity: pressed ? 0.5 : 1}, styles.button]}>
        <Text style={styles.buttonText}>{item.title}</Text>
        <Icon
          name="chevron-right"
          size={20}
          style={{display: 'flex', alignSelf: 'flex-end'}}
        />
      </Pressable>
    )
  }
  return (
    <TemplateScreen>
      <View
        style={{
          flexDirection: 'column',
        }}>
      </View>
      <FlatList
        data={AccountItems}
        renderItem={AccountItem}
        style={{
          display: 'flex',
          height: '100%',
        }}
      />
    </TemplateScreen>
  )
}
