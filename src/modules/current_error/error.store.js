/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  passwordError: false,
  nameError: false,
  errorMessage: null,
}

const errorSlice = createSlice({
  name: "errors",
  initialState,
  reducers: {
    addPasswordError(state, action) {
      state.passwordError = true
      state.errorMessage = action.payload
    },
    addNameError(state, action) {
      state.nameError = true
      state.errorMessage = action.payload
    },
    cleanError(state) {
      state.passwordError = false
      state.nameError = false
      state.errorMessage = null
    },
  },
})

const { reducer } = errorSlice
const { addError, cleanError } = errorSlice.actions

export { reducer, addError, cleanError }
