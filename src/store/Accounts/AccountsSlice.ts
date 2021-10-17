import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import EncryptedStorage from 'react-native-encrypted-storage';
import { debug } from '@utils'

import { Account, AccountPayload } from './types'

export interface AccountsSlice {
  [key: string]: Account
}

const initialState: AccountsSlice = {}

export const storeAccountToEncryptedStorage = createAsyncThunk<any, any>(
  'accounts/save',
  async (account, { dispatch }) => {
    debug.log('account store', account)
    try {
      await EncryptedStorage.setItem(
        "account",
        JSON.stringify(account)
      );

      dispatch(addAccount(account))
    } catch (error) {
      debug.error(error)
    }
  }
)

export const fetchEncryptedAccounts = createAsyncThunk('accounts/fetch', async (_, { dispatch }) => {
  try {
    const account = await EncryptedStorage.getItem('account')
    if (account) {
      dispatch(addAccount(JSON.parse(account)))
    }

  } catch (error) {
    debug.error('accounts/fetch', error)
  }
})

export const clearAccounts = createAsyncThunk('accounts/clear', async (_, { dispatch }) => {
  try {
    await EncryptedStorage.clear()
    dispatch(removeAll())
  } catch (error) {
    debug.error('accounts/clear', error)
  }
})


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
export const { addAccount, removeAll } = accountsSlice.actions

export default accountsSlice.reducer