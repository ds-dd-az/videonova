/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit"

const videoSlice = createSlice({
  name: "videos",
  initialState: {},
  reducers: {
    addVideo(state, action) {
      state = action.payload
    },
  },
})

const { reducer } = videoSlice
const { addVideo } = videoSlice.actions

export { reducer, addVideo }
