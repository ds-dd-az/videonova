/* eslint-disable jsx-a11y/label-has-associated-control,prefer-const,react-hooks/exhaustive-deps, react/jsx-no-bind  */
import React, { useEffect, useId } from "react"
import "../style.css"
import { useDispatch } from "react-redux"
import InputField from "../../input-field/input-field"
import Button from "../../button/button"
import signInFunc from "../../../../external_func/sign-in-form/signin-functions"
import FormSwitcher from "../../../../external_func/switch-form/form-switcher"
import ErrorMessage from "../form_error/form-error"

export default function SignIn() {
  const dispatch = useDispatch()
  const name = useId()
  const password = useId()
  let nameField
  let passwordField
  useEffect(() => {
    nameField = document.getElementById(`${name}`)
    passwordField = document.getElementById(`${password}`)
  })
  function login() {
    signInFunc(dispatch, nameField.value, passwordField.value)
  }
  return (
    <div className="sign-in">
      <h1>Sign In</h1>
      <ErrorMessage />
      <form>
        <label htmlFor={name}>
          Name
          <InputField
            variant="smallText"
            id={name}
            placeholder="Type name..."
          />
        </label>
        <label htmlFor={password}>
          Password
          <InputField
            id={password}
            variant="password"
            placeholder="Type password..."
          />
        </label>
        <Button text="Sign In" click={login} />
        <span>
          Don`t have account? <FormSwitcher />
        </span>
      </form>
    </div>
  )
}
