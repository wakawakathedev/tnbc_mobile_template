import { configureStore } from '@reduxjs/toolkit'

import accountsReducer from '@store/Accounts/AccountsSlice'
import networksReducer from '@store/Networks/NetworksSlice'


export const store = configureStore({
  reducer: {
    accounts: accountsReducer,
    networks: networksReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch