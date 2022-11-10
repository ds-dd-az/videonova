import React from "react"
import "./style.css"
import { useSelector } from "react-redux"
import { SelectError } from "../../../../modules/current_error"

export default function ErrorMessage() {
  const message = useSelector(SelectError)
  if (message !== null) {
    return <h3 className="error-message">{message}</h3>
  }
  return null
}
