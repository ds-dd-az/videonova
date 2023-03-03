import React from "react"
import { useSelector } from "react-redux"
import { selectType } from "../../modules/form"
import AddVideoWithLogic from "./add-new-video-logic"
import SignInFormWithLogic from "./sign-in-logic"

export default function FormHandler() {
  const formType = useSelector(selectType)
  console.log(formType)

  if (formType === "addVideo") {
    return <AddVideoWithLogic />
  }

  if (formType === "signIn") {
    return <SignInFormWithLogic />
  }
}
