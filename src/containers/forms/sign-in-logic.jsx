import React from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  SelectErrorMessage,
  SelectPasswordError,
  SelectNameError,
} from "../../modules/current_error"
import Form from "./forms/forms"
import { SelectLoginLoading } from "../../modules/userdata"
import SignIn from "./forms/sign-in-form/sign-in-form"
import signInFunc from "../../external_func/sign-in-form/signin-functions"
import FormSwitcher from "../../external_func/switch-form/form-switcher"
import CloseFormButton from "../close-form-button/close-form-button"
import XIcon from "./forms/x-icon/x-icon"

/**
 * Logical wrapper for sign In form
 *
 * reads state, passes props to the form also contains form closing button
 * @returns node, signIn form with enabled functionality
 */
export default function SignInFormWithLogic() {
  const dispatch = useDispatch()
  const errorMessage = useSelector(SelectErrorMessage)
  const passwordError = useSelector(SelectPasswordError)
  const nameError = useSelector(SelectNameError)
  const loading = useSelector(SelectLoginLoading)

  const login = () => {
    const nameField = document.getElementById("name")
    const passwordField = document.getElementById("password")
    signInFunc(dispatch, nameField.value, passwordField.value)
  }

  return (
    <Form>
      <CloseFormButton>
        <XIcon />
      </CloseFormButton>
      <SignIn
        submitFunc={login}
        errorMessage={errorMessage}
        passwordError={passwordError}
        nameError={nameError}
        loading={loading}
        formSwitcher={
          <span>
            Don`t have account? <FormSwitcher />
          </span>
        }
      />
    </Form>
  )
}
