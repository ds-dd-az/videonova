import React from "react"
import propTypes from "prop-types"
import InputField from "../../../../components/ui/input-field/input-field"
import Button from "../../../../components/ui/button/button"
import FormError from "../../../error-message/form-error-logic"
import Heading from "../../../../components/ui/headings/headings"

/**
 * Sign in form component
 * @param submitFunc - function performed on submit
 * @param errorMessage - string, error message that will be displayed when error is occured
 * @param passwordError - bool, highlights password field if true
 * @param nameError - bool, highlights name field if true
 * @param loading - bool, displays loading spinner in button if true
 * @param formSwitcher - node, form switcher component
 * @returns node, sign in form component
 */
export default function SignIn(props) {
  const {
    submitFunc,
    errorMessage,
    passwordError,
    nameError,
    loading,
    formSwitcher,
  } = props
  SignIn.propTypes = {
    /**
     * function performed on submit
     */
    submitFunc: propTypes.func,
    /**
     * error message that will be displayed when error is occured
     */
    errorMessage: propTypes.string,
    /**
     * highlights password field if true
     */
    passwordError: propTypes.bool,
    /**
     * highlights name field if true
     */
    nameError: propTypes.bool,
    /**
     * displays loading spinner in button if true
     */
    loading: propTypes.bool,
    /**
     * form switcher component
     */
    formSwitcher: propTypes.node,
  }
  SignIn.defaultProps = {
    submitFunc: null,
    errorMessage: null,
    passwordError: false,
    nameError: false,
    loading: false,
    formSwitcher: null,
  }

  return (
    <div className="sign-in-form">
      <Heading size={1}>
        Sign <span>In</span>
      </Heading>
      <FormError message={errorMessage} />
      <form>
        <label htmlFor="name">
          <Heading size={3}>Name</Heading>
          <InputField
            error={nameError}
            variant="smallText"
            id="name"
            placeholder="Type name..."
          />
        </label>
        <label htmlFor="password">
          <Heading size={3}>Password</Heading>
          <InputField
            error={passwordError}
            id="password"
            variant="password"
            placeholder="Type password..."
          />
        </label>
        <Button text="Sign In" click={submitFunc} loading={loading} />
        {formSwitcher}
      </form>
    </div>
  )
}
