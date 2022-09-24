/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit"

const videoSlice = createSlice({
  name: "video",
  initialState: { videos: {} },
  reducers: {
    addVideo(state, action) {
      return {
        ...state,
        videos: [
          ...state.videos,
          {
            videoUrl: action.payload,
            videoName: action.payload,
            description: action.payload,
          },
        ],
      }
    },
  },
})

const { reducer } = videoSlice
const { addVideo } = videoSlice.actions

export { reducer, addVideo }
