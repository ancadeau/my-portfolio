import { configureStore, createSlice } from '@reduxjs/toolkit'
import darkmodeReducer from '../features/darkmode/Darkmode'

export default configureStore({
  reducer: {
    darkmode: darkmodeReducer,
  },
})
