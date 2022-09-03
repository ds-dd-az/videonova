import React from "react"
import propTypes from "prop-types"
import "./style.css"
import SignIn from "./sign-in-form/sign-in-form"
import XIcon from "./close-form-button/close-form"

export default function Form(props) {
  const { signIn, signUp, addVideo } = props

  Form.propTypes = {
    /**
     * if true will return sign in form
     */
    signIn: propTypes.bool,
    /**
     * if true will return sign up form
     */
    signUp: propTypes.bool,
    /**
     * if true will return "add video" form
     */
    addVideo: propTypes.bool,
  }
  Form.defaultProps = {
    signIn: false,
    signUp: false,
    addVideo: false,
  }
  if (signIn) {
    return (
      <div className="form-wrapper">
        <XIcon />
        <SignIn />
      </div>
    )
  }
}
