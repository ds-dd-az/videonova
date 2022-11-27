export const rootSelector = (state) => state

export const selectAuthorised = (state) => state.main.user.authorised

export const selectUserId = (state) =>
  state.main.user.authorised && state.main.user.userInfo.userId

export const selectUserName = (state) =>
  state.main.user.authorised && state.main.user.userInfo.userName

export const selectOthersUserName = (state) => state.main.user.userInfo.userName

export const selectOthersUserId = (state) => state.main.user.userInfo.userId

export const selectUserPassword = (state) =>
  state.user.authorised && state.main.user.userInfo.userPassword

export const selectRegisteredUser = (state) => state.main.user.registeredUser

export const selectRegisteredPassword = (state) =>
  state.main.user.registeredUser.userPassword

export const selectRegisteredName = (state) =>
  state.main.user.registeredUser.userName
