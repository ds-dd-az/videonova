/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit"

const formSlice = createSlice({
  name: "form",
  initialState: {
    visibility: false,
    type: null,
  },
  reducers: {
    show(state, action) {
      state.visibility = true
      state.type = action.payload
    },
    hide(state) {
      state.visibility = false
    },
  },
})

const { reducer } = formSlice
const { show, hide } = formSlice.actions

export { reducer, show, hide }
