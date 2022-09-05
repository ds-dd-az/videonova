/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
  name: "user",
  initialState: {
    authorised: false,
    userInfo: null,
    registeredUser: null,
  },
  reducers: {
    authorise(state, action) {
      state.authorised = true
      state.userInfo = action.payload
    },
    unAuthorise(state, action) {
      state.authorised = false
      state.userInfo = action.payload
    },
    register(state, action) {
      state.authorised = true
      state.userInfo = action.payload
      state.registeredUser = action.payload
    },
  },
})

const { reducer } = userSlice
const { authorise, unAuthorise } = userSlice.actions

export { reducer, authorise, unAuthorise }
