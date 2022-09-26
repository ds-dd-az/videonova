/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  videos: [],
}

const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    addVideo(state, action) {
      state.videos.push(action.payload)
    },
  },
})

const { reducer } = videoSlice
const { addVideo } = videoSlice.actions

export { reducer, addVideo }
