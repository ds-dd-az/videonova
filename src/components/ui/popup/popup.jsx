import React from "react"
import "./style.css"
import { useSelector } from "react-redux"
import Form from "../forms/forms"
import { selectKind, selectVisibility } from "../../../modules/form"

export default function Popup() {
  const visible = useSelector(selectVisibility)
  const kind = useSelector(selectKind)
  const show = visible ? "popup_show" : "popup_hide"
  console.log(useSelector(selectKind))
  return (
    <div className={`popup ${show}`}>
      <div className="bgBlur" />
      <Form variant={useSelector(selectKind)} />
    </div>
  )
}
