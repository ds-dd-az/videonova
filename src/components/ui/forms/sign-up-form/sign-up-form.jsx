/* eslint-disable jsx-a11y/label-has-associated-control,react-hooks/exhaustive-deps */
import React, { useEffect, useId } from "react"
import "../style.css"
import { useDispatch, useSelector } from "react-redux"
import { unwrapResult } from "@reduxjs/toolkit"
import InputField from "../../input-field/input-field"
import ErrorMessage from "../form_error/form-error"
import Button from "../../button/button"
import {
  registerUser,
  fetchUsers,
  SelectLoginLoading,
} from "../../../../modules/userdata"
import {
  SelectPasswordError,
  SelectNameError,
} from "../../../../modules/current_error"
import FormSwitcher from "../../../../external_func/switch-form/form-switcher"

export default function SignUp() {
  const name = useId()
  const password = useId()
  const repeatPassword = useId()
  let nameField
  let passwordField
  let confirmPassField
  useEffect(() => {
    nameField = document.getElementById(`${name}`)
    passwordField = document.getElementById(`${password}`)
    confirmPassField = document.getElementById(`${repeatPassword}`)
  })
  const passwordError = useSelector(SelectPasswordError)
  const nameError = useSelector(SelectNameError)
  const dispatch = useDispatch()
  function register(userName, userPassword) {
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
  function registration() {
    dispatch({
      type: "errors/cleanError",
    })
    if (passwordField.value !== confirmPassField.value) {
      dispatch({
        type: "errors/addPasswordError",
        payload: "Passwords must be the same",
      })
      if (passwordField.value.length < 8) {
        dispatch({
          type: "errors/addPasswordError",
          payload: "Password must be at least eight symbols long",
        })
      }
      if (nameField.value.length < 4) {
        dispatch({
          type: "errors/addNameError",
          payload: "Name must be at least four symbols long",
        })
      }
    } else {
      register(nameField.value, passwordField.value)
    }
  }
  const loginLoading = useSelector(SelectLoginLoading)
  return (
    <div className="sign-up">
      <h1>Sign Up</h1>
      <ErrorMessage />
      <form>
        <label htmlFor={name}>
          Name
          <InputField
            variant="smallText"
            id={name}
            error={nameError}
            placeholder="Type name..."
          />
        </label>
        <label htmlFor={password}>
          Password
          <InputField
            variant="password"
            id={password}
            error={passwordError}
            placeholder="Type password..."
          />
        </label>
        <label htmlFor={repeatPassword}>
          Repeat Password
          <InputField
            variant="password"
            id={repeatPassword}
            error={passwordError}
            placeholder="Repeat password..."
          />
        </label>
        {/* eslint-disable-next-line react/jsx-no-bind */}
        <Button text="Sign up" loading={loginLoading} click={registration} />
        <span>
          Already have an account? <FormSwitcher />
        </span>
      </form>
    </div>
  )
}
