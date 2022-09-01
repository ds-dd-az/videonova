import React from "react"
import "./style.css"
import propTypes from "prop-types"
import EyeToggle from "./eye-toggle/eye-toggle"

export default function InputField(props) {
  const { size, hide, placeholder, withIcon } = props
  InputField.propTypes = {
    /**
     * size of the input-field
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
      <div>
        <input
          className={Styles.join(" ")}
          type="password"
          placeholder={placeholder}
        />
      </div>
    )
  }
  if (withIcon) {
    return (
      <div>
        <input
          className={Styles.join(" ")}
          type="text"
          placeholder={placeholder}
        />
        <EyeToggle />
      </div>
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
