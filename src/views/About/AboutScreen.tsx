import {NativeStackScreenProps} from '@react-navigation/native-stack'
import React from 'react'
import {FlatList, Pressable, Text, View} from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

import {TemplateScreen} from '../utils/TemplateScreen/TemplateScreen'
import {Routes, AccountStackParams} from '../../navigation/Routes'
import {styles} from '../Accounts/styles'
import {useNavigation, NavigationProp} from '@react-navigation/native'

type Props = NativeStackScreenProps<AccountStackParams, 'AccountOverview'>

type AboutItem = {
  title: string
  destination: Routes
  params?: any
}

const AboutItems: AboutItem[] = [
  {
    title: 'Import Account',
    destination: Routes.ImportAccount,
  },
  {
    title: 'Create Account',
    destination: Routes.CreateAccount,
  },
  {
    title: 'Export Account',
    destination: Routes.ExportAccount,
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
interface AboutItemProps {
  item: AboutItem
  navigation: any
}

const AboutItem = ({item, navigation}: AboutItemProps) => {
  return (
    <Pressable
      onPress={() => navigation.navigate(item.destination, item.params)}
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

const MoreInfoCard = () => (
  <View style={{padding: 20}}>
    <View style={{padding: 10, borderWidth: 1, borderColor: 'red'}}>
      <Text>
        This template was created with ♥ by wakawakathedev on behalf of tnbcrow
        in 2021.
      </Text>
    </View>
  </View>
)

export const AboutScreen = () => {
  const navigation = useNavigation()

  return (
    <TemplateScreen>
      <FlatList
        data={AboutItems}
        renderItem={({item}) => AboutItem({item, navigation})}
      />
      <MoreInfoCard />
    </TemplateScreen>
  )
}
