import { useEffect, useState } from 'react'

import { config } from '@config'

export const useNetworkStatus = () => {
  const [networkStatus, updateNetworkStatus] = useState<boolean | null>(null)

  useEffect(() => {
    const getNetworkStatus = async () => {
      const { protocol, ip_address } = config.network.Testnet.PRIMARY_BANK
      const address = `${protocol}://${ip_address}`
      const ping = await fetch(address)
      updateNetworkStatus(ping.ok)
    }
    getNetworkStatus()
  }, [networkStatus])

  return networkStatus
}