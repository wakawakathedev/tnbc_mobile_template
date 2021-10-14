import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { RootState } from '@store/store'
import { formatUrl } from '@utils'

export const useNetworkStatus = () => {
  const networks = useSelector((state: RootState) => state.networks)

  const [networkStatus, updateNetworkStatus] = useState<boolean | null>(null)
  const [isLoading, setLoading] = useState<boolean>(false)


  useEffect(() => {
    const getNetworkStatus = async () => {
      const { protocol, address } = networks.Testnet.PRIMARY_BANK
      const bankAddress = formatUrl(protocol, address)

      setLoading(true)
      const ping = await fetch(bankAddress)
      setLoading(false)
      updateNetworkStatus(ping.ok)
    }
    getNetworkStatus()
  }, [networkStatus])

  return { networkStatus, isLoading }
}