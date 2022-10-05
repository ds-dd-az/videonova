/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  allUsers: {},
}

const userDataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    getData(state, action) {
      state.allUsers = action.payload
    },
  },
})

const { reducer } = userDataSlice
const { getData } = userDataSlice.actions

export { reducer, getData }
