import React from "react"
import { useDispatch } from "react-redux"
import Icon from "./close-form.png"
import "../style.css"

const xIcon = {
  src: Icon,
  alt: "close form",
}

export default function XIcon() {
  const dispatch = useDispatch()
  function closeForm() {
    dispatch({
      type: "form/hide",
    })
  }
  return (
    <div
      className="x-icon"
      role="button"
      onClick={closeForm}
      tabIndex={0}
      onKeyDown={closeForm}
    >
      <img src={xIcon.src} alt={xIcon.alt} />
    </div>
  )
}
