/**
 * todo
 * - show/hide wallet balance
 * - show/hide total balance
 */

import React, {useEffect, useState} from 'react'
import {Text, View} from 'react-native'
import {useSelector} from 'react-redux'
import {PrimaryValidator} from 'thenewboston/src/primary-validator'

import {RootState} from '@store/store'
import {Card} from '@ui/Card'
import {formatUrl} from '@utils'

export const AccountBalance: React.FC = () => {
  const [isShown, toggleShow] = useState<boolean>(false)
  const networks = useSelector((state: RootState) => state.networks)
  const accounts = useSelector((state: RootState) => state.accounts)

  const [balance, setBalance] = useState<number>(0)

  const getBalance = async () => {
    const {protocol, address} = networks.Testnet.PRIMARY_VALIDATOR
    const url = formatUrl(protocol, address)
    const primaryValidator = new PrimaryValidator(url)

    // networks
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
      title={
        <>
          <Text>AccountBalance: {balance}</Text>
          <Text style={{fontSize: 10}}>
            Number of Accounts Loaded: {Object.keys(accounts).length}
          </Text>
        </>
      }>
      <View>
        <Text>{Object.keys(accounts).length}</Text>
      </View>
    </Card>
  )
}
