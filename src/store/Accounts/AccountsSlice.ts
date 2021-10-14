import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Account = {
  publicKey: string
  privateKey: string
  nickname: string
}

type AccountPayload = {
  key: string
  account: Account
}


export interface AccountsSlice {
  [key: string]: Account
}

const initialState: AccountsSlice = {}

export const accountsSlice = createSlice({
  name: 'accounts',
  initialState,
  reducers: {
    addAccount: (state, action: PayloadAction<AccountPayload>) => {
      state[action.payload.key] = action.payload.account
    },
    removeAll: (state) => {
      state = {}
    },
    removeAccount: (state, action: PayloadAction<string>) => {
      delete state[action.payload]
    },
  },
})

// Action creators are generated for each case reducer function
export const { addAccount } = accountsSlice.actions

export default accountsSlice.reducer