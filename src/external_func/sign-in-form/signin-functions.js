import { unwrapResult } from "@reduxjs/toolkit"
import { login } from "../../modules/userdata"
import { closeForm } from "../dispatches/dispatches"

/**
 * signIn Function
 *
 * Dispatches redux thunk, unwraps its result and if succesfull it just closes the form and new user is already posted on the server,
 * if not displays error message inside of the form
 * @param dispatch - useDispatch hook
 * @param userName - string, user's name
 * @param userPassword - string, user's password
 */
export default function signInFunc(dispatch, userName, userPassword) {
  dispatch(
    login({
      username: userName,
      password: userPassword,
    })
  )
    .then(unwrapResult)
    .then(() => {
      closeForm(dispatch)
      dispatch({
        type: "errors/cleanError",
      })
    })
    .catch((error) => {
      if (error.message === "Request failed with status code 404") {
        dispatch({
          type: "errors/addPasswordError",
        })
        dispatch({
          type: "errors/addNameError",
          payload: "Password or name is written incorrectly",
        })
      } else {
        dispatch({
          type: "errors/addError",
          payload: "Unexpected error ocurred, try again later",
        })
      }
    })
}
