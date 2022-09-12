/* eslint-disable jsx-a11y/label-has-associated-control,react-hooks/exhaustive-deps */
import React, { useEffect, useId } from "react"
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
  const dispatch = useDispatch()
  function login() {
    if (passwordField.value === confirmPassField.value) {
      dispatch({
        type: "user/authorise",
        payload: {
          userName: `${nameField.value}`,
          userId: 35,
          password: `${passwordField.value}`,
        },
      })
      dispatch({
        type: "form/hide",
      })
    } else alert("password must be the same")
  }
  return (
    <div className="sign-up">
      <h1>Sign Up</h1>
      <form>
        <label htmlFor={name}>
          Name
          <InputField id={name} placeholder="Type name..." />
        </label>
        <label htmlFor={password}>
          Password
          <InputField hide id={password} placeholder="Type password..." />
        </label>
        <label htmlFor={repeatPassword}>
          Repeat Password
          <InputField
            hide
            id={repeatPassword}
            placeholder="Repeat password..."
          />
        </label>
        {/* eslint-disable-next-line react/jsx-no-bind */}
        <Button text="Sign up" click={login} />
        Already have an account? Sign in
      </form>
    </div>
  )
}
