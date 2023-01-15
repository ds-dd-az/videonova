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
  postLoading: false,
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
  const user = axios.post(
    "https://wonderful-app-lmk4d.cloud.serverless.com/register",
    data
  )
  console.log(user)
  return (await user).data.id
})

export const loginUser = createAsyncThunk("data/login", async (data) => {
  const user = axios.post(
    "https://wonderful-app-lmk4d.cloud.serverless.com/auth",
    data
  )
  console.log(user)
  return (await user).data.id
})

export const addVideo = createAsyncThunk("data/addVideo", async (data) => {
  console.log(data)
  const videoInfo = {
    url: data.url,
    title: data.title,
    description: data.description,
  }
  console.log(videoInfo)
  console.log(data.userId)
  const video = axios.post(
    "https://wonderful-app-lmk4d.cloud.serverless.com/video",
    data,
    {
      headers: {
        id: data.userId,
      },
    }
  )
  console.log(video)
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
      state.postLoading = false
    })
    builder.addCase(registerUser.pending, (state) => {
      state.postLoading = true
    })
    builder.addCase(fetchUsers.rejected, (state) => {
      state.loading = false
    })
    builder.addCase(fetchVideos.rejected, (state) => {
      state.loading = false
    })
    builder.addCase(registerUser.rejected, (state) => {
      state.postLoading = false
    })
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.currentUser = action.payload
      state.loginLoading = false
    })
    builder.addCase(loginUser.pending, (state) => {
      state.loginLoading = true
    })
    builder.addCase(loginUser.rejected, (state) => {
      state.postLoading = false
    })
    builder.addCase(addVideo.pending, (state) => {
      state.postLoading = true
    })
    builder.addCase(addVideo.fulfilled, (state) => {
      state.postLoading = false
    })
    builder.addCase(addVideo.rejected, (state) => {
      state.postLoading = false
    })
  },
})

const { reducer } = userDataSlice
const { getData } = userDataSlice.actions

export { reducer, getData }
