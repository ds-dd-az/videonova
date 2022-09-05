/* eslint-disable no-param-reassign */
import React from "react"
import { configureStore } from "@reduxjs/toolkit"
import { Provider } from "react-redux"
import propTypes from "prop-types"
import { reducer as userReducer } from "./modules/user/index"

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
})

export function Store(props) {
  const { children } = props
  return <Provider store={store}>{children}</Provider>
}

Store.propTypes = {
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]).isRequired,
}
