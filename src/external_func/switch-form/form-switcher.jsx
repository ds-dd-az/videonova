import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectType } from "../../modules/form"

/**
 * Form switcher container component
 *
 * reads current form type from state and dispatches closing and reopening of the other form type,
 * if signIn opened it will close it and open signUp form
 * @returns node, clickable span with blue text in it
 */
export default function FormSwitcher() {
  const dispatch = useDispatch()
  const formType = useSelector(selectType)
  let switchFunction
  let text
  function switchToSignIn() {
    dispatch({
      type: "form/hide",
    })
    dispatch({
      type: "form/show",
      payload: { type: "signIn" },
    })
  }
  function switchToSignUp() {
    dispatch({
      type: "form/hide",
    })
    dispatch({
      type: "form/show",
      payload: { type: "signUp" },
    })
  }
  if (formType === "signUp") {
    text = "Sign in"
    switchFunction = switchToSignIn
  }
  if (formType === "signIn") {
    text = "Sign up"
    switchFunction = switchToSignUp
  }

  return (
    <span
      style={{ color: "blue", cursor: "pointer" }}
      onClick={switchFunction}
      tabIndex={0}
      role="button"
      onKeyDown={switchFunction}
    >
      {text}
    </span>
  )
}
