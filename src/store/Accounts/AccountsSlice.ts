import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import EncryptedStorage from 'react-native-encrypted-storage';

import { PrimaryValidator } from 'thenewboston/src/primary-validator'

import { formatUrl, debug } from '@utils'

import { Account, AccountPayload } from './types'
import { RootState } from '@store/store'

export interface AccountsSlice {
  [key: string]: Account
}

const initialState: AccountsSlice = {}

export const storeAccountToEncryptedStorage = createAsyncThunk<any, any>(
  'accounts/save',
  async (data, { dispatch, getState }) => {
    try {
      const accountState = getState() as RootState

      const savedAccountState = {
        ...accountState.accounts,
        [data.key]: data.account
      }

      await EncryptedStorage.setItem(
        "account",
        JSON.stringify(savedAccountState)
      );

      dispatch(addAccount(data))
      await dispatch(fetchAllBalances())
    } catch (error) {
      debug.error(error)
    }
  }
)

export const fetchEncryptedAccounts = createAsyncThunk('accounts/fetch', async (_, { dispatch }) => {
  try {
    const stringifiedData = await EncryptedStorage.getItem('account')
    const accountsState = JSON.parse(stringifiedData ?? '')
    const accounts: Account[] = Object.values(accountsState)

    if (accounts) {
      accounts.map(account => {
        dispatch(addAccount({ key: account.publicKey, account }))
      })
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

export const fetchAllBalances = createAsyncThunk('accounts/fetch-balances', async (_, { dispatch, getState }) => {
  try {
    const state = getState() as RootState
    const { protocol, address } = state.networks.Testnet.Validators.PRIMARY_VALIDATOR
    const url = formatUrl(protocol, address)
    const primaryValidator = new PrimaryValidator(url)


    const fetchBalance = async (account: string) => {
      const response = await primaryValidator.getAccountBalance(account)
      return response?.balance ?? 0
    }

    const accounts = Object.keys(state.accounts)

    for (const account of accounts) {
      const balance = await fetchBalance(account)
      dispatch(updateBalance({ account, balance }))
    }

  } catch (error) {
    debug.error('accounts/fetch-balances', error)
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
    updateBalance(state, action: PayloadAction<{ account: string, balance: number }>) {
      const accountInfo = state[action.payload.account]

      state[action.payload.account] = {
        ...accountInfo,
        balance: action.payload.balance
      }
    }
  },
})

// Action creators are generated for each case reducer function
export const { addAccount, removeAll, updateBalance } = accountsSlice.actions

export default accountsSlice.reducer