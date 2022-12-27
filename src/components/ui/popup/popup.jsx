import React from "react"
import "./style.css"
import { useSelector } from "react-redux"
import Form from "../forms/forms"
import { selectType, selectVisibility } from "../../../modules/form"

export default function Popup() {
  const visible = useSelector(selectVisibility)
  const show = visible ? "popup_show" : "popup_hide"
  return (
    <div className={`popup ${show}`}>
      <div className="bgBlur" />
      <Form variant={useSelector(selectType)} />
    </div>
  )
}
