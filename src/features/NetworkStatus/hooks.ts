import { useEffect, useState } from 'react'

import { config } from '@config'

export const useNetworkStatus = () => {
  const [networkStatus, updateNetworkStatus] = useState<boolean | null>(null)
  const [isLoading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    const getNetworkStatus = async () => {
      const { protocol, ip_address } = config.network.Testnet.PRIMARY_BANK
      const address = `${protocol}://${ip_address}`

      setLoading(true)
      const ping = await fetch(address)
      setLoading(false)
      updateNetworkStatus(ping.ok)
    }
    getNetworkStatus()
  }, [networkStatus])

  return { networkStatus, isLoading }
}