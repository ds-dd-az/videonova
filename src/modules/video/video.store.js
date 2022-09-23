/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit"

const videoSlice = createSlice({
  name: "videos",
  initialState: { videos: {} },
  reducers: {
    addVideo(state, action) {
      const payLoad = action.payload
      state.videos = { ...state.videos, payLoad }
    },
  },
})

const { reducer } = videoSlice
const { addVideo } = videoSlice.actions

export { reducer, addVideo }
