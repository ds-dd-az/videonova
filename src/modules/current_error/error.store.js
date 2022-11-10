/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  currentError: null,
}

const errorSlice = createSlice({
  name: "errors",
  initialState,
  reducers: {
    addError(state, action) {
      state.currentError = action.payload
    },
    cleanError(state) {
      state.currentError = null
    },
  },
})

const { reducer } = errorSlice
const { addError, cleanError } = errorSlice.actions

export { reducer, addError, cleanError }
