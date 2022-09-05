/* eslint-disable jsx-a11y/label-has-associated-control,prefer-const */
import React from "react"
import propTypes from "prop-types"
import "../style.css"
import { useDispatch } from "react-redux"
import InputField from "../../input-field/input-field"
import Button from "../../button/button"

const incorrectStyles = ["incorrect-password"]
export default function SignIn() {
  let error = false

  if (error) {
    incorrectStyles.push("incorrect-password_visible")
  }
  const dispatch = useDispatch()
  function login() {
    dispatch({
      type: "user/authorise",
      payload: { userName: "mega user", userId: 35 },
    })
    dispatch({
      type: "form/hide",
    })
  }
  return (
    <div className="sign-in">
      <h1>Sign In</h1>
      <div className={incorrectStyles.join(" ")}>
        Your password is incorrect. Please,try again
      </div>
      <form>
        <label>
          Name
          <InputField placeholder="Type name..." />
        </label>
        <label>
          Password
          <InputField withIcon hide placeholder="Type password..." />
        </label>
        {/* eslint-disable-next-line react/jsx-no-bind */}
        <Button text="Sign in" click={login} />
        Don`t have account? Sign up
      </form>
    </div>
  )
}
