/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react"
import propTypes from "prop-types"
import "../style.css"
import InputField from "../../input-field/input-field"
import Button from "../../button/button"

const incorrectStyles = ["incorrect-password"]
export default function SignIn(props) {
  const { error } = props
  SignIn.propTypes = {
    /**
     * shows wrong passport message
     */
    error: propTypes.bool,
  }
  SignIn.defaultProps = {
    error: false,
  }
  if (error) {
    incorrectStyles.push("incorrect-password_visible")
  }
  return (
    <div className="sign-in">
      <h1>Sign In</h1>
      <div className={incorrectStyles}>
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
        <Button text="Sign in" />
        Don`t have account? Sign up
      </form>
    </div>
  )
}
