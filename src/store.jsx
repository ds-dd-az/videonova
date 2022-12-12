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
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2"
import propTypes from "prop-types"
import { PersistGate } from "redux-persist/integration/react"
import { reducer as userReducer } from "./modules/user/index"
import { reducer as formReducer } from "./modules/form/index"
import { reducer as dataReducer } from "./modules/userdata/index"
import { reducer as errorReducer } from "./modules/current_error/index"

const ReducerToPersist = combineReducers({
  user: userReducer,
  form: formReducer,
  data: dataReducer,
})

const persistConfig = {
  key: "root",
  stateReconciler: autoMergeLevel2,
  storage,
}

const persistedReducer = persistReducer(persistConfig, ReducerToPersist)

const rootReducer = combineReducers({
  main: persistedReducer,
  errors: errorReducer,
})
export const store = configureStore({
  reducer: rootReducer,
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
