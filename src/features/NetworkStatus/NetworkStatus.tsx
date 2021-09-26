/**
 * - add bank (add default)
 * - add own bank
 * - use test net
 */

import React, {useEffect, useState} from 'react'
import {Text} from 'react-native'

import {Card} from '@ui/Card'

import { useNetworkStatus } from './hooks'

export const NetworkStatus: React.FC = () => {
  const networkStatus = useNetworkStatus()
  return (
    <Card>
      <Text>Network Status {networkStatus ? '👍' : '😭' }</Text>
    </Card>
  )
}