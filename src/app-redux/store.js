import { configureStore } from '@reduxjs/toolkit'
import memoryReducer from '../app-redux/features/memorySlice'

export const store = configureStore({
  reducer: {
    memory: memoryReducer,
  },
})