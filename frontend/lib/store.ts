import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counterSlice'

// Use this to prevent multiple instances of the store during HMR and route changes
let store: ReturnType<typeof configureStore> 

export const makeStore = () => {
  // Return the existing store if it exists
  if (store) {
    console.log("The store is already there:")
    console.log(store);
    return store
  }
  
  // Create a new store if none exists
  store = configureStore({
    reducer: {
      ThisIsCounter: counterReducer,
    },
  })
  
  return store
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']