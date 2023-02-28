import { createAsyncThunk } from "@reduxjs/toolkit"
import {
  getUsers,
  postUser,
  loginUser,
} from "../../external_func/http-requests/users"
import { getVideos, postVideo } from "../../external_func/http-requests/videos"

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
