import React, {useState} from 'react'
import {TextInput, Text, View} from 'react-native'
import {NativeStackScreenProps} from '@react-navigation/native-stack'

import {Account} from 'thenewboston'

import {config} from '@config'
import {AccountStackParams} from '@navigation/Routes'
import {Button} from '@ui/Button'
import {TemplateScreen} from '@views/utils/TemplateScreen/TemplateScreen'
import {formatUrl} from '@utils'

type Props = NativeStackScreenProps<AccountStackParams, 'SendCoins'>

// setup bankUrl
const {protocol, address} = config.networks.Testnet.PRIMARY_BANK
const BANK_URL = formatUrl(protocol, address)

// WIP Screen
export const SendCoinsScreen = ({navigation}: Props) => {
  const [amount, setAmount] = useState<string | undefined>(undefined)
  const [recipientAddress, setRecipientAddress] = useState<string | undefined>(
    undefined,
  )
  const [loading, setLoading] = useState(false)

  const sendCoins = async () => {
    // setLoading(true)
  }

  return (
    <TemplateScreen>
      <>
        <View style={{padding: 10}}>
          <Text>Current Bank</Text>
          <TextInput value={BANK_URL} editable={false} />
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
            value={amount}
            placeholder="10"
            onChangeText={text => setAmount(text)}
          />
        </View>
        <View style={{padding: 10}}>
          <Button title="Send Coins" onPress={sendCoins} />
        </View>
      </>
    </TemplateScreen>
  )
}
