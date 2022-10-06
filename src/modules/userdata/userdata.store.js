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
    addUser(state, action) {
      state.allUsers.push(action.payload)
    },
    delUser(state) {
      state.allUsers.pop()
    },
  },
})

const { reducer } = userDataSlice
const { getData } = userDataSlice.actions

export { reducer, getData }
