/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useId } from "react"
import "../style.css"
import { useDispatch } from "react-redux"
import InputField from "../../input-field/input-field"
import Button from "../../button/button"

export default function SignUp() {
  const name = useId()
  let nameField
  useEffect(() => {
    nameField = document.getElementById(`${name}`)
  })
  const dispatch = useDispatch()
  function login() {
    dispatch({
      type: "user/authorise",
      payload: { userName: `${nameField.value}`, userId: 35 },
    })
    dispatch({
      type: "form/hide",
    })
  }
  return (
    <div className="sign-up">
      <h1>Sign Up</h1>
      <form>
        <label htmlFor={name}>
          Name
          <InputField id={name} placeholder="Type name..." />
        </label>
        <label>
          Password
          <InputField hide placeholder="Type password..." />
        </label>
        <label>
          Repeat Password
          <InputField hide anotherid placeholder="Repeat password..." />
        </label>
        {/* eslint-disable-next-line react/jsx-no-bind */}
        <Button text="Sign up" click={login} />
        Already have an account? Sign in
      </form>
    </div>
  )
}
