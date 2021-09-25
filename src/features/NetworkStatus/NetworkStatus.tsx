/**
 * - add bank (add default)
 * - add own bank
 * - use test net
 */

import React, {useEffect, useState} from 'react'
import {Text} from 'react-native'

import {Card} from '@ui/Card'


const getNetworkStatus = async () => {
  const data = await fetch("http://20.98.98.0/config")
  console.log(data)
}

const useNetworkStatus = () => {
  const [_networkStatus, updateNetworkStatus] = useState(null)


  useEffect(() => {
    getNetworkStatus()
  })

  return _networkStatus
}

export const NetworkStatus: React.FC = () => {
  const networkStatus = useNetworkStatus()
  return (
    <Card>
      <Text>Network Status</Text>
    </Card>
  )
}