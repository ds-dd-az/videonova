import { unwrapResult } from "@reduxjs/toolkit"
import { registerUser, fetchUsers } from "../../modules/userdata"
import { closeForm } from "../dispatches/dispatches"
import signInFunc from "../sign-in-form/signin-functions"

function register(dispatch, userName, userPassword) {
  dispatch(
    registerUser({
      username: userName,
      password: userPassword,
    })
  )
    .then(unwrapResult)
    .then(() => {
      dispatch(fetchUsers())
      signInFunc(dispatch, userName, userPassword)
      closeForm(dispatch)
    })
    .catch((error) => {
      if (error.message === "Request failed with status code 409") {
        dispatch({
          type: "errors/addNameError",
          payload: "This name is already taken or you have already registered",
        })
      } else {
        dispatch({
          type: "errors/addError",
          payload: "Unexpected error ocurred, try again later",
        })
      }
    })
}
/**
 * user signUp function
 *
 * Checks user's name for its length(must be at least 4 symbols long),
 * also checks if password is long enough and if it is identical with "repeat password" field's content,
 * if all checks are passed it will execute registration function which dispatches redux thunk with http request and unwraps its result
 * @param dispatch - useDispatch hook, needs to be passed down to the registration function, which dispatches a thunk
 * @param name - user's name, also goes to the dispatching function if all checks are passed
 * @param password - users desireable password
 * @param repeatPassword - repeat password field value, needed for checks
 */
export default function signUp(dispatch, name, password, repeatPassword) {
  dispatch({
    type: "errors/clearError",
  })
  if (password.length < 8) {
    dispatch({
      type: "errors/addPasswordError",
      payload: "Password must be at least eight symbols long",
    })
  } else if (password !== repeatPassword) {
    dispatch({
      type: "errors/addPasswordError",
      payload: "Passwords must be indentical",
    })
  } else if (name.length < 4) {
    dispatch({
      type: "errors/addNameError",
      payload: "Name must be at least four symbols long",
    })
  } else register(dispatch, name, password)
}
