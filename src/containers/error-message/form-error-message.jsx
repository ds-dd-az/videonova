import React from "react"
import "../../styles/error-message/error-message.css"
import propTypes from "prop-types"

/**
 * Error message for forms
 * @param message - string, message that needs to be displayed
 * @returns node, component with passed message
 */
export default function ErrorMessage(props) {
  const { message } = props
  ErrorMessage.propTypes = {
    /**
     * error message that will be displayed
     */
    message: propTypes.string.isRequired,
  }
  return <h3 className="error-message">{message}</h3>
}
