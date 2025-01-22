import { configureStore } from '@reduxjs/toolkit'
import { UsersReducer } from './reducers/UsersReducer'

export const store = configureStore({
  reducer: {
    UsersReducer: UsersReducer.reducer,
  },
})