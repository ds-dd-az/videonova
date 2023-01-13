import { unwrapResult } from "@reduxjs/toolkit"
import { loginUser } from "../../modules/userdata"

export default function signInFunc(dispatch, userName, userPassword) {
  dispatch(
    loginUser({
      username: userName,
      password: userPassword,
    })
  )
    .then(unwrapResult)
    .then((promiseResult) => {
      console.log(promiseResult)
      dispatch({
        type: "form/hide",
      })
      dispatch({
        type: "errors/cleanError",
      })
    })
    .catch((error) => {
      console.log(error)
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
