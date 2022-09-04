import React from "react"
import propTypes from "prop-types"
import "./style.css"
import SignIn from "./sign-in-form/sign-in-form"
import XIcon from "./close-form-button/close-form"
import SignUp from "./sign-up-form/sign-up-form"
import VideoForm from "./add-new-video/add-new-video"
import VideoLoading from "./add-new-video_loading/video-loading"

export default function Form(props) {
  const { signIn, signUp, addVideo, videoLoading } = props

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
    /**
     * if true will return loading screen
     */
    videoLoading: propTypes.bool,
  }
  Form.defaultProps = {
    signIn: false,
    signUp: false,
    addVideo: false,
    videoLoading: false,
  }
  if (addVideo) {
    return (
      <div className="form-wrapper">
        <VideoForm />
      </div>
    )
  }
  if (signUp) {
    return (
      <div className="form-wrapper">
        <XIcon />
        <SignUp />
      </div>
    )
  }
  if (videoLoading) {
    return (
      <div className="form-wrapper">
        <VideoLoading progress="eeee" />
      </div>
    )
  }
  return (
    <div className="form-wrapper">
      <XIcon />
      <SignIn />
    </div>
  )
}
