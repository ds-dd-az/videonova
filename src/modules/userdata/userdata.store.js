/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import getVideos from "../../api/videos"

const initialState = {
  allUsers: {},
  videos: {},
}

export const fetchUsers = createAsyncThunk("data/fetchUsers", async () => {
  const dispatch = useDispatch()
  const videos = await getVideos()
  dispatch({
    type: "data/getVideos",
    payload: videos,
  })
})

const userDataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    fetchUsers() {},
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
