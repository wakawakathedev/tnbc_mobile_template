import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {TextInput, Text, View, ScrollView} from 'react-native'
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import RNPickerSelect from 'react-native-picker-select'

import {Account, AccountPaymentHandler} from 'thenewboston'

import {config} from '@config'
import {AccountStackParams} from '@navigation/Routes'
import {RootState} from '@store/store'
import {Button} from '@ui/Button'
import {TemplateScreen} from '@views/utils/TemplateScreen/TemplateScreen'
import {formatUrl} from '@utils'
import {fetchAllBalances} from '@store/Accounts/AccountsSlice'

type Props = NativeStackScreenProps<AccountStackParams, 'SendCoins'>

// setup bankUrl
const {protocol, nickname, address} = config.networks.Testnet.Banks.PRIMARY_BANK
const BANK_URL = formatUrl(protocol, address)

type Optional = string | undefined
type OptionalNumber = number | undefined
// WIP Screen
export const SendCoinsScreen = ({navigation}: Props) => {
  const dispatch = useDispatch()
  const stateAccounts = useSelector((state: RootState) => state.accounts)
  const accounts = useSelector((state: RootState) => {
    return Object.values(stateAccounts).map(account => ({
      label:
        account.nickname?.trim().length > 0
          ? account.nickname
          : account.publicKey,
      value: account.publicKey,
      balance: account.balance,
    }))
  })

  const [amount, setAmount] = useState<OptionalNumber>(undefined)

  const [account, setAccount] = useState(undefined)
  const [recipientAddress, setRecipientAddress] = useState<Optional>(undefined)
  const [activeBankUrl, setActiveBankUrl] = useState(undefined)

  const [loading, setLoading] = useState(false)

  const clearFields = () => {
    setAccount(undefined)
    setRecipientAddress(undefined)
    setAmount(undefined)
  }

  const sendCoins = async () => {
    if (!account || !recipientAddress || !activeBankUrl) return
    const privateKey = stateAccounts[account].privateKey
    const senderAccount = new Account(privateKey)

    const paymentHandlerOptions = {
      account: senderAccount,
      bankUrl: activeBankUrl,
    }
    console.log('account payment handler')
    const paymentHandler = new AccountPaymentHandler(paymentHandlerOptions)
    console.log('payment init')
    setLoading(true)
    await paymentHandler.init()

    if (recipientAddress && amount) {
      console.log('here')
      try {
        console.log('send coins')
        await paymentHandler.sendCoins(
          recipientAddress,
          amount,
          `Tnbc mobile wallet payment`,
        )
        console.log('sent coins')
        await fetchBalances()
      } catch (error) {
        console.error('error', error)
      }
      clearFields()
      console.log('Done')
    }

    setLoading(false)
  }

  const fetchBalances = async () => {
    await dispatch(fetchAllBalances())
  }

  useEffect(() => {
    fetchBalances()
  }, [])

  const banks = [{label: `${nickname}: ${BANK_URL}`, value: BANK_URL}]

  return (
    <TemplateScreen>
      <ScrollView>
        <>
          <View style={{padding: 10}}>
            <Text>Current Bank: {nickname}</Text>
            <View
              style={{
                borderColor: 'black',
                borderWidth: 1,
                width: '100%',
                height: 40,
              }}>
              <RNPickerSelect
                onValueChange={value => setActiveBankUrl(value)}
                items={banks}
                style={{
                  inputIOS: {
                    padding: 10,
                  },
                  inputAndroid: {
                    padding: 10,
                  },
                }}
              />
            </View>
          </View>

          <View style={{padding: 10}}>
            <Text>Pick Account:</Text>
            <View
              style={{
                borderColor: 'black',
                borderWidth: 1,
                width: '100%',
                height: 40,
              }}>
              <RNPickerSelect
                onValueChange={account => setAccount(account)}
                value={account}
                items={accounts}
                style={{
                  inputIOS: {
                    padding: 10,
                  },
                  inputAndroid: {
                    padding: 10,
                  },
                }}
              />
            </View>
          </View>

          <View style={{padding: 10}}>
            <Text>Recipent</Text>
            <TextInput
              style={{
                borderBottomColor: 'black',
                borderWidth: 1,
                width: '100%',
                padding: 10,
              }}
              value={recipientAddress}
              onChangeText={text => setRecipientAddress(text)}
            />
          </View>
          <View style={{padding: 10}}>
            <Text>Amount</Text>
            <TextInput
              keyboardType="decimal-pad"
              style={{
                borderBottomColor: 'black',
                borderWidth: 1,
                width: '100%',
                padding: 10,
              }}
              value={amount?.toString()}
              placeholder="10"
              onChangeText={value => {
                if (value && typeof parseInt(value) === 'number') {
                  setAmount(parseInt(value))
                }
              }}
            />
          </View>
          <View style={{padding: 10}}>
            <Button
              title="Send Coins"
              onPress={sendCoins}
              disabled={!recipientAddress && !amount && !activeBankUrl}
            />
          </View>
          <View style={{padding: 10}}>
            {accounts.map(account => {
              return (
                <View
                  key={account.value}
                  style={{
                    marginVertical: 10,
                    borderColor: 'black',
                    borderTopWidth: 1,
                    paddingVertical: 10,
                  }}>
                  <Text>Nickname: {account.label}</Text>

                  <View style={{paddingVertical: 10}}>
                    <View
                      style={{
                        borderColor: 'black',
                        borderWidth: 1,
                        width: '100%',
                        padding: 4,
                      }}>
                      <Text selectable={true}>{account.value}</Text>
                    </View>
                  </View>

                  <Text>Balance: {account.balance}</Text>
                </View>
              )
            })}
          </View>
        </>
      </ScrollView>
    </TemplateScreen>
  )
}
