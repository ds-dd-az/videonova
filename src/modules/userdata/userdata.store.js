/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { getUsers } from "../../api/users"
import getVideos from "../../api/videos"

const initialState = {
  allUsers: {},
  videos: {},
}

export const fetchUsers = createAsyncThunk("data/fetchUsers", async () => {
  const users = await getUsers()
  return users
})

export const fetchVideos = createAsyncThunk("data/fetchVideos", async () => {
  const users = await getVideos()
  return users
})

const userDataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addUser(state, action) {
      state.allUsers.push(action.payload)
    },
    delUser(state) {
      state.allUsers.pop()
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.allUsers = action.payload
    })
    builder.addCase(fetchVideos.fulfilled, (state, action) => {
      state.videos = action.payload
    })
  },
})

const { reducer } = userDataSlice
const { getData } = userDataSlice.actions

export { reducer, getData }
