import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'

export default configureStore({
  reducer: {
    // by adding a reducer parameter, we tell the store to use this slice reducer function to handle all updates to that state.
    counter: counterReducer, 
  },
})