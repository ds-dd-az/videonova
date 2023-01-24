import React from "react"
import propTypes from "prop-types"
import "./style.css"
import SignIn from "./sign-in-form/sign-in-form"
import XIcon from "./close-form-button/close-form"
import SignUp from "./sign-up-form/sign-up-form"
import VideoForm from "./add-new-video/add-new-video"
import VideoAdded from "./add-new-video_added/video-added"

export default function Form(props) {
  // eslint-disable-next-line react/prop-types
  const { variant } = props
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
        <XIcon />
        <SignUp />
      </div>
    )
  }
  if (variant === "videoLoading") {
    return (
      <div id="formId" className="form-wrapper">
        <VideoAdded />
      </div>
    )
  }
  if (variant === "signIn") {
    return (
      <div id="formId" className="form-wrapper">
        <XIcon />
        <SignIn />
      </div>
    )
  }
}
