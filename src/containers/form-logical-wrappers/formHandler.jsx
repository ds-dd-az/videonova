import React from "react"
import { useSelector } from "react-redux"
import { selectType } from "../../modules/form"
import AddVideoWithLogic from "./add-new-video-logic"
import SignInFormWithLogic from "./sign-in-logic"
import SignUpFormWithLogic from "./sign-up-logic"
import VideoAddedMessageWithLogic from "./video-added-logic"

export default function FormHandler() {
  const formType = useSelector(selectType)
  console.log(formType)

  if (formType === "signIn") {
    return <SignInFormWithLogic />
  }
  if (formType === "signUp") {
    return <SignUpFormWithLogic />
  }
  if (formType === "addVideo") {
    return <AddVideoWithLogic />
  }
  if (formType === "videoAdded") {
    return <VideoAddedMessageWithLogic />
  }
}
