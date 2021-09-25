import React, {useState} from 'react'
import {TextInput, Text, View} from 'react-native'
import {NativeStackScreenProps} from '@react-navigation/native-stack'

import {Account} from 'thenewboston'

import {config} from '../../../config'
import {Button} from '../../ui/Button'
import {TemplateScreen} from '../utils/TemplateScreen'
import {AccountStackParams} from '../../navigation/Routes'

type Props = NativeStackScreenProps<AccountStackParams, 'SendCoins'>

const BANK_URL = `${config.network.Testnet.PRIMARY_BANK.protocol}://${config.network.Testnet.PRIMARY_BANK.ip_address}`

// WIP Screen
export const SendCoinsScreen = ({navigation}: Props) => {
  const [amount, setAmount] = useState(undefined)
  const [recipientAddress, setRecipientAddress] = useState(undefined)
  const [loading, setLoading] = useState(false)

  const sendCoins = async () => {
    setLoading(true)
  }

  return (
    <TemplateScreen>
      <>
        <View>
          <Text>Set Bank</Text>
          <TextInput value={BANK_URL} editable={false} />
        </View>
        <View>
          <Text>Set amount</Text>
          <TextInput
            keyboardType="decimal-pad"
            value={amount}
            placeholder="10"
          />
        </View>

        <View>
          <Text>Recipient</Text>
          <TextInput value={recipientAddress} placeholder="abc123" />
        </View>

        <Button title="Send Coins" onPress={sendCoins} />
      </>
    </TemplateScreen>
  )
}
