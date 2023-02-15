import React from "react"
import { useSelector } from "react-redux"
import ErrorMessage from "../../components/ui/error-message/error-message"
import { SelectErrorMessage } from "../../modules/current_error"

export default function FormError() {
  const message = useSelector(SelectErrorMessage)
  if (message !== null) {
    return <ErrorMessage message={message} />
  }
  return null
}
