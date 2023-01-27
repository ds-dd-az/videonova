/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit"

const sortSlice = createSlice({
  name: "sorting",
  initialState: {
    sorted: false,
    reversed: false,
  },
  reducers: {
    sort(state) {
      state.sorted = true
    },
    reverse(state) {
      state.sorted = !state.sorted
    },
  },
})

const { reducer } = sortSlice
const { sort } = sortSlice.actions

export { reducer, sort }
