import React, { useEffect, useId } from "react"
import { useDispatch, useSelector } from "react-redux"
import InputField from "../../input-field/input-field"
import Button from "../../button/button"
import signInFunc from "../../../../external_func/sign-in-form/signin-functions"
import FormSwitcher from "../../../../external_func/switch-form/form-switcher"
import FormError from "../../../../containers/error-message-cont/form-error"
import { SelectLoginLoading } from "../../../../modules/userdata"
import {
  SelectPasswordError,
  SelectNameError,
} from "../../../../modules/current_error"

export default function SignIn() {
  const dispatch = useDispatch()
  const name = useId()
  const password = useId()
  let nameField
  let passwordField
  const passwordError = useSelector(SelectPasswordError)
  const nameError = useSelector(SelectNameError)
  const loading = useSelector(SelectLoginLoading)
  useEffect(() => {
    nameField = document.getElementById(`${name}`)
    passwordField = document.getElementById(`${password}`)
  })
  return (
    <div className="sign-in">
      <h1>Sign In</h1>
      <FormError />
      <form>
        <label htmlFor={name}>
          Name
          <InputField
            error={nameError}
            variant="smallText"
            id={name}
            placeholder="Type name..."
          />
        </label>
        <label htmlFor={password}>
          Password
          <InputField
            error={passwordError}
            id={password}
            variant="password"
            placeholder="Type password..."
          />
        </label>
        <Button
          text="Sign In"
          click={() =>
            signInFunc(dispatch, nameField.value, passwordField.value)
          }
          loading={loading}
        />
        <span>
          Don`t have account? <FormSwitcher />
        </span>
      </form>
    </div>
  )
}
