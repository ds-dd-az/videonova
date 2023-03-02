import React from "react"
import "../../../styles/popup/popup.css"
import { useSelector } from "react-redux"
import { selectVisibility } from "../../../modules/form"
import CloseForm from "../../../containers/close-form-button/close-form-button"
import FormHandler from "../../../containers/form-logical-wrappers/formHandler"

export default function Popup() {
  const visible = useSelector(selectVisibility)
  const isShown = visible ? "popup_show" : "popup_hide"
  return (
    <div className={`popup ${isShown}`}>
      <CloseForm>
        <div className="bgBlur" />
      </CloseForm>
      <FormHandler />
    </div>
  )
}
