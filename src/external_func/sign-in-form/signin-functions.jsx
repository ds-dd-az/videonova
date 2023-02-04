import { unwrapResult } from "@reduxjs/toolkit"
import { login } from "../../modules/userdata"

export default function signInFunc(dispatch, userName, userPassword) {
  dispatch(
    login({
      username: userName,
      password: userPassword,
    })
  )
    .then(unwrapResult)
    .then(() => {
      dispatch({
        type: "form/hide",
      })
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
