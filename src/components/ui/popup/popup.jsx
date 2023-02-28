import React from "react"
import "../../../styles/popup/popup.css"
import { useSelector } from "react-redux"
import Form from "../forms/forms"
import { selectType, selectVisibility } from "../../../modules/form"
import CloseForm from "../../../containers/close-form-button/close-form-button"

export default function Popup() {
  const visible = useSelector(selectVisibility)
  const isShown = visible ? "popup_show" : "popup_hide"
  return (
    <div className={`popup ${isShown}`}>
      <CloseForm>
        <div className="bgBlur" />
      </CloseForm>
      <Form variant={useSelector(selectType)} />
    </div>
  )
}
