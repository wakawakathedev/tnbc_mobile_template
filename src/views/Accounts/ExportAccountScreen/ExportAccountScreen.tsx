import React, {useState} from 'react'
import {Switch, Text, View} from 'react-native'
import {useSelector, useDispatch} from 'react-redux'

import {Account} from 'thenewboston'
import {Button} from '@ui/Button'
import {TemplateScreen} from '@views/utils/TemplateScreen'
import {RootState} from '@store/store'
import {addAccount} from '@store/Accounts/AccountsSlice'

/**
 * Todo
 * - reveal private key (encrypt key in state)
 */

export const ExportAccountScreen = () => {
  const [isEncrypted, toggleEncryption] = useState<boolean>(false)
  const accounts = useSelector((state: RootState) => state.accounts)
  const dispatch = useDispatch()

  const exportAccount = () => {
    const exportedAccounts = Object.values(accounts)
  }

  return (
    <TemplateScreen>
      <>
        <View style={{padding: 10, borderBottomWidth: 1}}>
          <View
            style={{
              padding: 20,

              flexDirection: 'row',
              alignItems: 'flex-start',
              alignContent: 'center',
            }}>
            <View style={{padding: 10}}>
              <Text>With Encryption</Text>
            </View>
            <Switch
              trackColor={{false: '#767577', true: '#50cf25'}}
              thumbColor="#f4f3f4"
              ios_backgroundColor="#3e3e3e"
              onValueChange={() => toggleEncryption(!isEncrypted)}
              value={isEncrypted}
            />
          </View>
          <Button onPress={exportAccount} title="Export Account" />
        </View>
      </>
    </TemplateScreen>
  )
}
