/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit"

const sortSlice = createSlice({
  name: "sorting",
  initialState: {
    reversed: false,
  },
  reducers: {
    reverse(state) {
      state.reversed = !state.reversed
    },
  },
})

const { reducer } = sortSlice
const { sort } = sortSlice.actions

export { reducer, sort }
