import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Account = {
  publicKey: string,
  privateKey: string,
  nickname: string
}

type AccountPayload = {
  key: string
  account: Account
}


export interface AccountsSlice {
  accounts: {
    [key: string]: Account
  }
}

const initialState: AccountsSlice = {
  accounts: {}
}

export const accountSlice = createSlice({
  name: 'userAccounts',
  initialState,
  reducers: {
    addAccount: (state, action: PayloadAction<AccountPayload>) => {
      state.accounts[action.payload.key] = action.payload.account
    },
    removeAll: (state) => {
      state.accounts = {}
    },
    removeAccount: (state, action: PayloadAction<string>) => {
      delete state.accounts[action.payload]
    },
  },
})

// Action creators are generated for each case reducer function
export const { addAccount } = accountSlice.actions

export default accountSlice.reducer