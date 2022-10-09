/* eslint-disable no-param-reassign */
import React from "react"
import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { Provider } from "react-redux"
import storage from "redux-persist/lib/storage"
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist"
import propTypes from "prop-types"
import { PersistGate } from "redux-persist/integration/react"
import { reducer as userReducer } from "./modules/user/index"
import { reducer as formReducer } from "./modules/form/index"
import { reducer as videoReducer } from "./modules/video/index"
import { reducer as dataReducer } from "./modules/userdata/index"

const rootReducer = combineReducers({
  user: userReducer,
  form: formReducer,
  video: videoReducer,
  data: dataReducer,
})
const persistConfig = {
  key: "root",
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})
export const persistor = persistStore(store)
export function Store(props) {
  const { children } = props
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  )
}

Store.propTypes = {
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]).isRequired,
}
