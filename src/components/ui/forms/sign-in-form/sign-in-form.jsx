/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react"
import "../style.css"
import InputField from "../../input-field/input-field"
import Button from "../../button/button"

export default function SignIn() {
  return (
    <div className="sign-in">
      <h1>Sign In</h1>
      <form>
        <label>
          Name
          <InputField placeholder="Type name..." />
        </label>
        <label>
          Password
          <InputField withIcon hide placeholder="Type password..." />
        </label>
        <Button text="Sign in" />
        Don`t have account? Sign up
      </form>
    </div>
  )
}
