import React from "react"
import propTypes from "prop-types"
import "./style.css"

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
}
