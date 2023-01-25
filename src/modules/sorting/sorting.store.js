/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit"

const sortSlice = createSlice({
  name: "sorting",
  initialState: {
    sortBy: null,
  },
  reducers: {
    sort(state, action) {
      state.sortBy = action.payload
    },
  },
})

const { reducer } = sortSlice
const { sort } = sortSlice.actions

export { reducer, sort }
