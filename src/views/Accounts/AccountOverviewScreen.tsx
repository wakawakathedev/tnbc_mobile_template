import {NativeStackScreenProps} from '@react-navigation/native-stack'
import React from 'react'
import {Text, View} from 'react-native'

import {AccountBalance} from '@features/AccountBalance'
import {FriendsList} from '@features/FriendsList'
import {NetworkStatus} from '@features/NetworkStatus'
import {TransactionsList} from '@features/TransactionsList'
import {Routes, AccountStackParams} from '@navigation/Routes'
import {CardContainer} from '@ui/Card'
import {TemplateScreen} from '../utils/TemplateScreen'


type Props = NativeStackScreenProps<AccountStackParams, 'AccountOverview'>

// type Route = Routes.CreateAccount | Routes.SendCoins
/**
 * - send coins, set bank, set memo
 * - use qr code for public address
 */



export const AccountOverviewScreen = ({navigation}: Props) => {
  return (
    <TemplateScreen>
      <View style={{ paddingVertical: 10, paddingHorizontal: 10 }}>

        <CardContainer>
          <NetworkStatus />
        </CardContainer>

        <CardContainer>
          <FriendsList />
        </CardContainer>

        <CardContainer>
          <AccountBalance />
        </CardContainer>

        <CardContainer>
          <TransactionsList />
        </CardContainer>
      </View>
    </TemplateScreen>
  )
}
