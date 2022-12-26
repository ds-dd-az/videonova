/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import getUsers from "../../api/users"
import getVideos from "../../api/videos"

const initialState = {
  allUsers: {},
  videos: {},
  currentUser: {},
  loading: false,
  loginLoading: false,
}

export const fetchUsers = createAsyncThunk("data/fetchUsers", async () => {
  const users = await getUsers()
  return users
})

export const fetchVideos = createAsyncThunk("data/fetchVideos", async () => {
  const users = await getVideos()
  return users
})

export const registerUser = createAsyncThunk("data/register", async (data) => {
  const user = axios.post(
    "https://wonderful-app-lmk4d.cloud.serverless.com/register",
    data
  )
  console.log(user)
  return (await user).data.id
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
      state.loading = false
      state.allUsers = action.payload
    })
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchVideos.fulfilled, (state, action) => {
      state.loading = false
      state.videos = action.payload
    })
    builder.addCase(fetchVideos.pending, (state) => {
      state.loading = true
    })
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.currentUser = action.payload
      state.loginLoading = false
    })
    builder.addCase(registerUser.pending, (state) => {
      state.loginLoading = true
    })
  },
})

const { reducer } = userDataSlice
const { getData } = userDataSlice.actions

export { reducer, getData }
