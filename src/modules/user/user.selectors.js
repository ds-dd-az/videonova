export const rootSelector = (state) => state

export const selectAuthorised = (state) => state.user.authorised

export const selectUserId = (state) =>
  state.user.authorised && state.user.userInfo.userId

export const selectUserName = (state) =>
  state.user.authorised && state.user.userInfo.userName

export const selectOthersUserName = (state) => state.user.userInfo.userName

export const selectOthersUserId = (state) => state.user.userInfo.userId

export const selectUserPassword = (state) =>
  state.user.authorised && state.user.userInfo.userPassword

export const selectRegisteredUser = (state) => state.user.registeredUser

export const selectRegisteredPassword = (state) =>
  state.user.registeredUser.userPassword

export const selectRegisteredName = (state) =>
  state.user.registeredUser.userName
