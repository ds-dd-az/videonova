import React from "react"
import propTypes from "prop-types"
import "../../../styles/forms"

/**
 * Form wrapper component
 * @param children - form component that need to be wrapped
 * @returns form component with wrapper
 */
export default function Form(props) {
  const { children } = props
  Form.propTypes = {
    /**
     * form that need to be wrapped
     */
    children: propTypes.node.isRequired,
  }
  return (
    <div id="formId" className="form-wrapper">
      {children}
    </div>
  )
}
