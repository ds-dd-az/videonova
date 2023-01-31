import React from "react"
import { useDispatch } from "react-redux"
import XIcon from "../../components/ui/forms/x-icon/x-icon"
import { closeForm } from "../../external_func/dispatches/dispatches"

export default function CloseForm() {
  const dispatch = useDispatch()
  const close = () => closeForm(dispatch)
  return (
    <div>
      <XIcon click={close} />
    </div>
  )
}
