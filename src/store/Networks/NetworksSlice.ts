import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Url, Protocol } from 'thenewboston/src/models/responses/constants'

import { config } from '@config'

type Node = {
  nickname: string
  protocol: string
  address: Url
  node_identifier: string
}

type BankPayload = Node

interface NetworksSlice {
  [networkName: string]: {
    [node: string]: Node
  }
}

const initialState: NetworksSlice = {
  ...config.networks
}

export const networksSlice = createSlice({
  name: 'networks',
  initialState,
  reducers: {
    addBank: (state, action: PayloadAction<BankPayload>) => {
      // state[action.payload.node_identifier] = action.payload
    },
    removeBank: (state, action: PayloadAction<string>) => {
      delete state[action.payload]
    },
  },
})

// Action creators are generated for each case reducer function
export const { addBank } = networksSlice.actions

export default networksSlice.reducer