import React from "react"
import propTypes from "prop-types"
import ErrorMessage from "./form-error-message"

/**
 * Form error logical wrapper
 * @param message - message that will be displayed
 * @returns null or node, depending on message value
 */
export default function FormError(props) {
  const { message } = props
  FormError.propTypes = {
    /**
     * message that will be displayed
     */
    message: propTypes.string,
  }

  FormError.defaultProps = {
    message: null,
  }
  if (message !== null) {
    return <ErrorMessage message={message} />
  }
  return null
}
