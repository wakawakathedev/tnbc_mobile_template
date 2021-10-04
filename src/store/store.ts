import { configureStore } from '@reduxjs/toolkit'
import accountReducer from '@features/Accounts/AccountSlice'


export const store = configureStore({
  reducer: {
    userAccounts: accountReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch