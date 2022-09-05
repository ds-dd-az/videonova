/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit"

const formSlice = createSlice({
  name: "form",
  initialState: {
    visibility: false,
    kind: null,
  },
  reducers: {
    show(state, action) {
      state.visibility = true
      state.kind = action.payload
    },
  },
})

const { reducer } = formSlice
const { show } = formSlice.actions

export { reducer, show }
