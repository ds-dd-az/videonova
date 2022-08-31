import React from "react"
import "./style.css"
import propTypes from "prop-types"

export default function InputField(props) {
  const { size, hide, placeholder, withIcon } = props
  InputField.propTypes = {
    /**
     * size of the form
     */
    size: propTypes.oneOf(["small", "big"]),
    /**
     * enables hiding of symbols
     */
    hide: propTypes.bool,
    /**
     * default text on input field
     */
    placeholder: propTypes.string,
    /**
     * adds eye icon to toggle visibility
     */
    withIcon: propTypes.bool,
  }
  InputField.defaultProps = {
    size: "small",
    hide: false,
    placeholder: "insert text please",
    withIcon: false,
  }
  const Styles = ["form"]
  if (size === "big") {
    Styles.push("form_big")
  }
  if (hide === true) {
    return (
      <input
        className={Styles.join(" ")}
        type="password"
        placeholder={placeholder}
      />
    )
  }
  return (
    <div>
      <input
        className={Styles.join(" ")}
        type="text"
        placeholder={placeholder}
      />
    </div>
  )
}
