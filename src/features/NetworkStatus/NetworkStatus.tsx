/**
 * - add bank (add default)
 * - add own bank
 * - use test net
 */

import React, {useState} from 'react'
import {useSelector} from 'react-redux'
import {Text} from 'react-native'

import {RootState} from '@store/store'
import {Card} from '@ui/Card'

import {useNetworkStatus} from './hooks'

export const NetworkStatus: React.FC = () => {
  const [isShown, toggleShow] = useState<boolean>(false)
  const {networkStatus, isLoading} = useNetworkStatus()

  const networks = useSelector((state: RootState) => state.networks)
  return (
    <Card
      isShown={isShown}
      toggleShow={toggleShow}
      title={
        <Text>
          Network Status {isLoading ? '⏳' : networkStatus ? '👍' : '😭'}
        </Text>
      }>
      <Text>{JSON.stringify(networks)}</Text>
    </Card>
  )
}
