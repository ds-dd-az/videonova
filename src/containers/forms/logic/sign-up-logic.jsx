import React from "react"
import { useSelector, useDispatch } from "react-redux"
import {
  SelectNameError,
  SelectPasswordError,
  SelectErrorMessage,
} from "../../../modules/current_error"
import signUp from "../../../external_func/sign-up-form/signup-functions"
import { SelectLoginLoading } from "../../../modules/userdata"
import Form from "../forms/forms"
import CloseFormButton from "../../close-form-button/close-form-button"
import XIcon from "../forms/x-icon/x-icon"
import SignUp from "../forms/sign-up-form/sign-up-form"
import FormSwitcher from "../../../external_func/switch-form/form-switcher"

/**
 * Logical wrapper for sign Up form
 *
 * reads state, passes props to the form also contains form closing button
 * @returns node, sign up form with enabled functionality
 */
export default function SignUpFormWithLogic() {
  const dispatch = useDispatch()
  const errorMessage = useSelector(SelectErrorMessage)
  const passwordError = useSelector(SelectPasswordError)
  const nameError = useSelector(SelectNameError)
  const register = () => {
    const nameField = document.getElementById("name")
    const passwordField = document.getElementById("password")
    const confirmPassField = document.getElementById("repeatPassword")
    signUp(
      dispatch,
      nameField.value,
      passwordField.value,
      confirmPassField.value
    )
  }
  const registrationLoading = useSelector(SelectLoginLoading)

  return (
    <Form>
      <CloseFormButton>
        <XIcon />
      </CloseFormButton>
      <SignUp
        submitFunc={register}
        errorMessage={errorMessage}
        passwordError={passwordError}
        nameError={nameError}
        loading={registrationLoading}
        formSwitcher={
          <span>
            Already have an account? <FormSwitcher />
          </span>
        }
      />
    </Form>
  )
}
