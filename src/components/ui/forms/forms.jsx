import React from "react"
import propTypes from "prop-types"
import "./style.css"
import SignIn from "./sign-in-form/sign-in-form"
import SignUp from "./sign-up-form/sign-up-form"
import VideoForm from "./add-new-video/add-new-video"
import VideoAddedContainer from "../../../containers/video-added/video-added"
import CloseForm from "../../../containers/close-form-button/close-form-button"

export default function Form(props) {
  const { variant } = props
  Form.propTypes = {
    /**
     * variant of the form that will be displayed
     */
    variant: propTypes.oneOf(["addVideo", "signUp", "videoAdded", "signIn"])
      .isRequired,
  }
  if (variant === "addVideo") {
    return (
      <div id="formId" className="form-wrapper">
        <VideoForm />
      </div>
    )
  }
  if (variant === "signUp") {
    return (
      <div id="formId" className="form-wrapper">
        <CloseForm />
        <SignUp />
      </div>
    )
  }
  if (variant === "videoAdded") {
    return (
      <div id="formId" className="form-wrapper">
        <CloseForm />
        <VideoAddedContainer />
      </div>
    )
  }
  if (variant === "signIn") {
    return (
      <div id="formId" className="form-wrapper">
        <CloseForm />
        <SignIn />
      </div>
    )
  }
}
