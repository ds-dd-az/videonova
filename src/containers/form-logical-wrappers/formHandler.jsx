import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import { selectType } from "../../modules/form"
import AddVideoWrapper from "./add-new-video-logic"
import SignInFormWrapper from "./sign-in-logic"

export default function FormHandler() {
  const formType = useSelector(selectType)
  console.log(formType)

  if (formType === "addVideo") {
    return <AddVideoWrapper />
  }

  if (formType === "signIn") {
    return <SignInFormWrapper />
  }
}
