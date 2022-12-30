/* eslint-disable jsx-a11y/label-has-associated-control,prefer-const,react-hooks/exhaustive-deps */
import React, { useEffect, useId, useState } from "react"
import "../style.css"
import { useDispatch } from "react-redux"
import InputField from "../../input-field/input-field"
import Button from "../../button/button"
import SignInContainer from "../../../../external_func/sign-in-form/signin-functions"
import FormSwitcher from "../../../../external_func/switch-form/form-switcher"

export default function SignIn() {
  const name = useId()
  const password = useId()
  let nameField = document.getElementById(`${name}`)
  const passwordField = document.getElementById(`${password}`)
  const [nameValue, setNameValue] = useState("")
  useEffect(() => {
    nameField = document.getElementById(`${name}`)
    setNameValue(nameField.value)
  })
  function loginer() {
    SignInContainer(nameField.value, passwordField.value)
  }
  const randomText = "eeee2"
  return (
    <div className="sign-in">
      <h1>Sign In</h1>
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
        {/* eslint-disable-next-line react/jsx-no-bind */}
        <SignInContainer userName={nameValue} userPassword="no" />
        {/* eslint-disable-next-line react/jsx-no-bind */}
        <Button />
        <span>
          Don`t have account? <FormSwitcher />
        </span>
      </form>
    </div>
  )
}
