import React from "react"
import propTypes from "prop-types"
import "../../../styles/forms"

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
