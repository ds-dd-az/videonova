import React from "react"
import { useDispatch } from "react-redux"
import propTypes from "prop-types"
import { closeForm } from "../../external_func/dispatches/dispatches"

export default function CloseFormButton(props) {
  const { children } = props
  const dispatch = useDispatch()
  const close = () => closeForm(dispatch)
  return (
    <div role="button" onClick={close} tabIndex={0} onKeyDown={close}>
      {children}
    </div>
  )
}

CloseFormButton.propTypes = {
  children: propTypes.node.isRequired,
}
