/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { getUsers, postUser, loginUser } from "../../api/users"
import { getVideos, postVideo } from "../../api/videos"

const initialState = {
  allUsers: {},
  videos: {},
  currentUser: {
    userId: null,
  },
  loading: false,
}

export const fetchUsers = createAsyncThunk("data/fetchUsers", async () => {
  const users = await getUsers()
  return users
})

export const fetchVideos = createAsyncThunk("data/fetchVideos", async () => {
  const videos = await getVideos()
  return videos
})

export const registerUser = createAsyncThunk("data/register", async (data) => {
  const user = postUser(data)
  return user
})

export const login = createAsyncThunk("data/login", async (data) => {
  const user = loginUser(data)
  return user
})

export const addVideo = createAsyncThunk("data/addVideo", async (data) => {
  const video = postVideo(data)
  return video
})

const userDataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    logOut(state) {
      state.currentUser.userId = null
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
      state.currentUser.userId = action.payload.id
      document.cookie = `token=${action.payload.authToken};max-age=31536000 `
      state.loginLoading = false
    })
    builder.addCase(registerUser.pending, (state) => {
      state.loginLoading = true
    })
    builder.addCase(fetchUsers.rejected, (state) => {
      state.loading = false
    })
    builder.addCase(fetchVideos.rejected, (state) => {
      state.loading = false
    })
    builder.addCase(registerUser.rejected, (state) => {
      state.loginLoading = false
    })
    builder.addCase(login.fulfilled, (state, action) => {
      state.currentUser.userId = action.payload.id
      document.cookie = `token=${action.payload.authToken};max-age=31536000 `
      state.loginLoading = false
    })
    builder.addCase(login.pending, (state) => {
      state.loginLoading = true
    })
    builder.addCase(login.rejected, (state) => {
      state.loginLoading = false
    })
  },
})

const { reducer } = userDataSlice
const { getData } = userDataSlice.actions

export { reducer, getData }
