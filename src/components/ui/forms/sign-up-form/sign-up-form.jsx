import React, { useEffect, useId } from "react"
import { useDispatch, useSelector } from "react-redux"
import signUp from "../../../../external_func/sign-up-form/signup-functions"
import InputField from "../../input-field/input-field"
import FormError from "../../../../containers/error-message-cont/form-error"
import Button from "../../button/button"
import { SelectLoginLoading } from "../../../../modules/userdata"
import {
  SelectPasswordError,
  SelectNameError,
} from "../../../../modules/current_error"
import FormSwitcher from "../../../../external_func/switch-form/form-switcher"

export default function SignUp() {
  const name = useId()
  const password = useId()
  const repeatPassword = useId()
  let nameField
  let passwordField
  let confirmPassField
  useEffect(() => {
    nameField = document.getElementById(`${name}`)
    passwordField = document.getElementById(`${password}`)
    confirmPassField = document.getElementById(`${repeatPassword}`)
  })
  const passwordError = useSelector(SelectPasswordError)
  const nameError = useSelector(SelectNameError)
  const dispatch = useDispatch()
  const register = () => {
    signUp(
      dispatch,
      nameField.value,
      passwordField.value,
      confirmPassField.value
    )
  }
  const registrationLoading = useSelector(SelectLoginLoading)
  return (
    <div className="sign-up">
      <h1>Sign Up</h1>
      <FormError />
      <form>
        <label htmlFor={name}>
          Name
          <InputField
            variant="smallText"
            id={name}
            error={nameError}
            placeholder="Type name..."
          />
        </label>
        <label htmlFor={password}>
          Password
          <InputField
            variant="password"
            id={password}
            error={passwordError}
            placeholder="Type password..."
          />
        </label>
        <label htmlFor={repeatPassword}>
          Repeat Password
          <InputField
            variant="password"
            id={repeatPassword}
            error={passwordError}
            placeholder="Repeat password..."
          />
        </label>
        <Button text="Sign up" loading={registrationLoading} click={register} />
        <span>
          Already have an account? <FormSwitcher />
        </span>
      </form>
    </div>
  )
}
