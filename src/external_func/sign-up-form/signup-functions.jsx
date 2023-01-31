import { unwrapResult } from "@reduxjs/toolkit"
import { registerUser, fetchUsers } from "../../modules/userdata"

function register(dispatch, userName, userPassword) {
  dispatch(
    registerUser({
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
      dispatch(fetchUsers())
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

export default function signUp(dispatch, name, password, repeatPassword) {
  dispatch({
    type: "errors/cleanError",
  })
  if (password !== repeatPassword) {
    dispatch({
      type: "errors/addPasswordError",
      payload: "Passwords must be indentical",
    })
    if (password.length < 8) {
      dispatch({
        type: "errors/addPasswordError",
        payload: "Password must be at least eight symbols long",
      })
    }
    if (name.length < 4) {
      dispatch({
        type: "errors/addNameError",
        payload: "Name must be at least four symbols long",
      })
    }
  } else {
    register(dispatch, name, password)
  }
}
