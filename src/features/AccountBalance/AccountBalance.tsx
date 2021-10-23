/**
 * todo
 * - show/hide wallet balance
 * - show/hide total balance
 */

import React, {useEffect, useState} from 'react'
import {Text, View} from 'react-native'
import {useSelector} from 'react-redux'
import {RootState} from '@store/store'
import {Card} from '@ui/Card'
import {Account} from '@store/Accounts/types'

export const AccountBalance: React.FC = () => {
  const [isShown, toggleShow] = useState<boolean>(false)
  const accounts = useSelector((state: RootState) => state.accounts)

  const [balance, setBalance] = useState<number>(0)

  const getBalance = () => {
    // networks
    const listOfAccounts: Account[] = Object.values(accounts)
    return listOfAccounts.reduce(
      (acc, account) => (acc += account?.balance ?? 0),
      0,
    )
  }

  useEffect(() => {
    const _balance = getBalance()
    setBalance(_balance)
  }, [accounts])

  return (
    <Card
      isShown={isShown}
      toggleShow={toggleShow}
      title={
        <>
          <Text>AccountBalance: {balance}</Text>
          <Text style={{fontSize: 10}}>
            Number of Accounts Loaded: {Object.keys(accounts).length}
          </Text>
        </>
      }>
      <View>
        {Object.keys(accounts).map(account => (
          <Text selectable={true} key={account}>
            {account}
          </Text>
        ))}
      </View>
    </Card>
  )
}
