import { configureStore } from '@reduxjs/toolkit'
import authReducer from './featchers/auth/authSlice'
import baseApi from './api/baseApi'
import { persistStore, persistReducer, FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key:'auth',
  storage
}

const persistedReducer = persistReducer(persistConfig,authReducer)
export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]:baseApi.reducer,
    auth:persistedReducer
  },
  middleware:getDefaultMiddlewares=> getDefaultMiddlewares({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }).concat(baseApi.middleware)
})


export  const persistor = persistStore(store)

export default store