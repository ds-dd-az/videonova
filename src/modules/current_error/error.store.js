/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  passwordError: false,
  unexpectedError: false,
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
    addError(state, action) {
      state.unexpectedError = true
      state.errorMessage = action.payload
    },
    clearError(state) {
      state.passwordError = false
      state.nameError = false
      state.errorMessage = null
    },
  },
})

const { reducer } = errorSlice
const { addError, clearError } = errorSlice.actions

export { reducer, addError, clearError }
