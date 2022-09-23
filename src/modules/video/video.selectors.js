export const rootSelector = (state) => state

export const selectVideoUrl = (state) => state.videos.videos[0].videoUrl

export const selectVideoName = (state) => state.videos.videos[0].videoName

export const selectDescription = (state) => state.videos.videos[0].description
