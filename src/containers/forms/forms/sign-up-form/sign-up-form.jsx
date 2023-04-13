import React from "react"
import propTypes from "prop-types"
import FormError from "../../../error-message/form-error-logic"
import Button from "../../../../components/ui/button/button"
import Heading from "../../../../components/ui/headings/headings"
import InputField from "../../../../components/ui/input-field/input-field"

/**
 * Sign up form component
 * @param submitFunc - function performed on submit
 * @param errorMessage - string, error message that will be displayed when error is occured
 * @param passwordError - bool, highlights password field if true
 * @param nameError - bool, highlights name field if true
 * @param loading - bool, displays loading spinner in button if true
 * @param formSwitcher - node, form switcher component
 * @returns node, sign up form component
 */
export default function SignUp(props) {
  const {
    submitFunc,
    errorMessage,
    passwordError,
    nameError,
    loading,
    formSwitcher,
  } = props

  SignUp.propTypes = {
    /**
     * function that will be executed on submit
     */
    submitFunc: propTypes.func,
    /**
     * error message that will be displayed when error is occured
     */
    errorMessage: propTypes.string,
    /**
     * highlights password field when there is an error
     */
    passwordError: propTypes.bool,
    /**
     * highlights name field when there is an error
     */
    nameError: propTypes.bool,
    /**
     * displays loading spinner in the button while request is loading
     */
    loading: propTypes.bool,
    /**
     * formSwitcher component
     */
    formSwitcher: propTypes.node,
  }

  SignUp.defaultProps = {
    submitFunc: null,
    errorMessage: null,
    passwordError: false,
    nameError: false,
    loading: false,
    formSwitcher: null,
  }

  return (
    <div className="sign-up-form">
      <Heading size={1}>
        Sign <span>Up</span>
      </Heading>
      <FormError message={errorMessage} />
      <form>
        <label htmlFor="name">
          <Heading size={3}>Name</Heading>
          <InputField
            variant="smallText"
            id="name"
            error={nameError}
            placeholder="Type name..."
          />
        </label>
        <label htmlFor="password">
          <Heading size={3}>Password</Heading>
          <InputField
            variant="password"
            id="password"
            error={passwordError}
            placeholder="Type password..."
          />
        </label>
        <label htmlFor="repeatPassword">
          <Heading size={3}>Repeat Password</Heading>
          <InputField
            variant="password"
            id="repeatPassword"
            error={passwordError}
            placeholder="Repeat password..."
          />
        </label>
        <Button text="Sign up" loading={loading} click={submitFunc} />
        {formSwitcher}
      </form>
    </div>
  )
}
