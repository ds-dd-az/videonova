import React from "react"
import propTypes from "prop-types"
import "../../../styles/forms"
import SignIn from "./sign-in-form/sign-in-form"
import SignUp from "./sign-up-form/sign-up-form"
import VideoForm from "./add-new-video/add-new-video"
import VideoAddedContainer from "../../../containers/video-added/video-added"
import CloseFormButton from "../../../containers/close-form-button/close-form-button"
import XIcon from "./x-icon/x-icon"

export default function Form(props) {
  const { variant } = props
  Form.propTypes = {
    /**
     * variant of the form that will be displayed
     * ( values: addVideo, signUp, videoAdded, signIn )
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
        <CloseFormButton>
          <XIcon />
        </CloseFormButton>
        <SignUp />
      </div>
    )
  }
  if (variant === "videoAdded") {
    return (
      <div id="formId" className="form-wrapper">
        <CloseFormButton>
          <XIcon />
        </CloseFormButton>
        <VideoAddedContainer />
      </div>
    )
  }
  if (variant === "signIn") {
    return (
      <div id="formId" className="form-wrapper">
        <CloseFormButton>
          <XIcon />
        </CloseFormButton>
        <SignIn />
      </div>
    )
  }
}
