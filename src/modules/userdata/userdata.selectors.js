export const rootSelector = (state) => state

export const SelectUsers = (state) => state.data.allUsers

export const SelectVideos = (state) => state.data.videos

export const SelectLoading = (state) => state.data.loading

export const SelectLoginLoading = (state) => state.data.loginLoading

export const SelectCurrentUserId = (state) => state.data.currentUser.userId
