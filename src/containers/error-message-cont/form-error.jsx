import React from "react"
import propTypes from "prop-types"
import ErrorMessage from "../../components/ui/error-message/error-message"

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
