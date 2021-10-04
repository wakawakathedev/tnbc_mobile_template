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
import {PrimaryValidator} from 'thenewboston/src/primary-validator'

export const AccountBalance: React.FC = () => {
  const [isShown, toggleShow] = useState<boolean>(false)
  const accounts = useSelector(
    (state: RootState) => state.userAccounts.accounts,
  )

  const [balance, setBalance] = useState<number>(0)

  const getBalance = async () => {
    const primaryValidator = new PrimaryValidator('http://20.98.87.223')

    // const response = await primaryValidator.getAccountBalance('')
    // if (response?.balance) {
    //   setBalance(response.balance)
    // }
  }

  useEffect(() => {
    getBalance()
  }, [accounts])

  return (
    <Card
      isShown={isShown}
      toggleShow={toggleShow}
      title={<Text>AccountBalance: {balance}</Text>}>
      <View>
        <Text>{JSON.stringify(accounts)}</Text>
      </View>
    </Card>
  )
}
