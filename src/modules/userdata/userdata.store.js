/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  allUsers: {},
  videos: {},
}

const userDataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    getUsers(state, action) {
      state.allUsers = action.payload
    },
    getVideos(state, action) {
      state.videos = action.payload
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
