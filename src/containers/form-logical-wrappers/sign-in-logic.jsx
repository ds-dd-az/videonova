import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  SelectErrorMessage,
  SelectPasswordError,
  SelectNameError,
} from "../../modules/current_error"
import Form from "../../components/ui/forms/forms"
import { SelectLoginLoading } from "../../modules/userdata"
import SignIn from "../../components/ui/forms/sign-in-form/sign-in-form"
import signInFunc from "../../external_func/sign-in-form/signin-functions"
import FormSwitcher from "../../external_func/switch-form/form-switcher"
import CloseFormButton from "../close-form-button/close-form-button"
import XIcon from "../../components/ui/forms/x-icon/x-icon"

/**
 * Logical wrapper for sign In form
 *
 * reads state, passes props to the form
 * @returns node, signIn form with enabled functionality
 */
export default function SignInFormWithLogic() {
  const dispatch = useDispatch()
  const errorMessage = useSelector(SelectErrorMessage)
  let nameField
  let passwordField
  const passwordError = useSelector(SelectPasswordError)
  const nameError = useSelector(SelectNameError)
  const loading = useSelector(SelectLoginLoading)
  useEffect(() => {
    nameField = document.getElementById("name")
    passwordField = document.getElementById("password")
  })
  const login = () => signInFunc(dispatch, nameField.value, passwordField.value)

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
