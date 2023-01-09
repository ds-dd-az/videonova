/* eslint-disable react/jsx-no-bind */
import React from "react"
import { useDispatch } from "react-redux"
import { unwrapResult } from "@reduxjs/toolkit"
import { loginUser } from "../../modules/userdata"
import Button from "../../components/ui/button/button"

/** export function SignInButton(userName, userPassword) {
  const dispatch = useDispatch()
  function login() {
    console.log(userName, userPassword)
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
        if (error.message === "Request failed with status code 409") {
          dispatch({
            type: "errors/addNameError",
            payload:
              "This name is already taken or you have already registered",
          })
        } else {
          dispatch({
            type: "errors/addError",
            payload: "Unexpected error ocurred, try again later",
          })
        }
      }) 
  }
  return <Button click={login} text="Sign in" />
}
  * */

export default function signInFunc(dispatch, userName, userPassword) {
  console.log("hi")
  console.log(userName, userPassword)
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
          type: "errors/addNameError",
          payload:
            "You don`t have an account yet or name is written incorrectly",
        })
      } else {
        dispatch({
          type: "errors/addError",
          payload: "Unexpected error ocurred, try again later",
        })
      }
    })
}
