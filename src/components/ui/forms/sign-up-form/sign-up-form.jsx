/* eslint-disable jsx-a11y/label-has-associated-control,react-hooks/exhaustive-deps */
import React, { useEffect, useId, useState } from "react"
import "../style.css"
import { useDispatch } from "react-redux"
import InputField from "../../input-field/input-field"
import Button from "../../button/button"

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
  const [passwordError, setPasswordError] = useState(false)
  const dispatch = useDispatch()
  function changeForm() {
    dispatch({
      type: "form/hide",
    })
    dispatch({
      type: "form/show",
      payload: "signIn",
    })
  }
  function register() {
    if (passwordField.value === confirmPassField.value) {
      console.log("user registered")
      dispatch({
        type: "form/hide",
      })
      setPasswordError(false)
    } else {
      setPasswordError(true)
      console.log(passwordError)
    }
  }
  let errorMessage
  function errorText() {
    if (passwordError) {
      errorMessage = "Passwords must be identical"
      setTimeout(() => setPasswordError(false), 3000)
      return <h3 style={{ color: "salmon" }}> {errorMessage}</h3>
    }
    return null
  }
  return (
    <div className="sign-up">
      <h1>Sign Up</h1>
      {errorText()}
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
        <Button text="Sign up" click={register} />
        <span>
          Already have an account?{" "}
          {/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
          /* eslint-disable jsx-a11y/no-static-element-interactions */}
          <span
            style={{ color: "blue", cursor: "pointer" }}
            onClick={changeForm}
            tabIndex={0}
            onKeyDown={changeForm}
          >
            Sign in
          </span>
        </span>
      </form>
    </div>
  )
}
