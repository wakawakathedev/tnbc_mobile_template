/**
 *
 * - check wallet transactions
 * - set destination wallets as restricted (blocked)
 * - lock wallet (requires second auth)
 *
 */

 import React from 'react'
 import {Text} from 'react-native'

 import {Card} from '@ui/Card'

export const TransactionsList: React.FC = () => {
  return (
    <Card>
      <Text>Recent Transactions</Text>
    </Card>
  )
}