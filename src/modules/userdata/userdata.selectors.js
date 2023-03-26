export const rootSelector = (state) => state

export const SelectUsers = (state) => state.data.allUsers

export const SelectVideos = (state) => state.data.videos

export const SelectUserLoading = (state) => state.data.usersLoading

export const SelectVideoLoading = (state) => state.data.videosLoading

export const SelectLoginLoading = (state) => state.data.loginLoading

export const SelectCurrentUserId = (state) => state.data.currentUser.userId
