/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react"
import "../style.css"
import InputField from "../../input-field/input-field"
import Button from "../../button/button"

export default function SignUp() {
  return (
    <div className="sign-up">
      <h1>Sign Up</h1>
      <form>
        <label>
          Name
          <InputField placeholder="Type name..." />
        </label>
        <label>
          Password
          <InputField hide placeholder="Type password..." />
        </label>
        <label>
          Repeat Password
          <InputField hide placeholder="Repeat password..." />
        </label>
        <Button text="Sign up" />
        Already have an account? Sign in
      </form>
    </div>
  )
}
