import {NativeStackScreenProps} from '@react-navigation/native-stack'
import React from 'react'
import {ScrollView, View} from 'react-native'

import {AccountBalance} from '@features/AccountBalance'
import {FriendsList} from '@features/FriendsList'
import {NetworkStatus} from '@features/NetworkStatus'
import {TransactionsList} from '@features/TransactionsList'
import {AccountStackParams} from '@navigation/Routes'
import {CardContainer} from '@ui/Card'
import {TemplateScreen} from '@views/utils/TemplateScreen'

type Props = NativeStackScreenProps<AccountStackParams, 'AccountOverview'>

import {styles} from './styles'

/**
 * - send coins, set bank, set memo
 * - use qr code for public address
 */

export const AccountOverviewScreen = ({navigation}: Props) => {
  return (
    <TemplateScreen>
      <ScrollView>
        <View style={styles.accountOverviewScreen}>
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
      </ScrollView>
    </TemplateScreen>
  )
}
