import React, { useState } from "react"
import "./style.css"
import propTypes from "prop-types"
import EyeToggle from "./eye-toggle/eye-toggle"

export default function InputField(props) {
  const { isBig, hide, placeholder, withIcon } = props
  InputField.propTypes = {
    /**
     * size of the input-field
     */
    isBig: propTypes.bool,
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
    isBig: false,
    hide: false,
    placeholder: "insert text please",
    withIcon: false,
  }
  const [hiding, setHiding] = useState(true)
  function changeHide() {
    setHiding(!hiding)
  }
  const type = hiding ? "password" : "text"
  const Styles = ["field"]
  if (isBig) {
    Styles.push("field_big")
    return (
      <div>
        <textarea
          id="description"
          maxLength={445}
          className={Styles.join(" ")}
          placeholder={placeholder}
        />
      </div>
    )
  }
  if (hide) {
    if (withIcon) {
      return (
        <div className="field-wrapper">
          <input
            id="password-toggle"
            className={Styles.join(" ")}
            type={type}
            placeholder={placeholder}
          />
          {/* eslint-disable-next-line react/jsx-no-bind */}
          <EyeToggle click={changeHide} />
        </div>
      )
    }

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

  return (
    <div>
      <input
        id="name"
        className={Styles.join(" ")}
        type="text"
        placeholder={placeholder}
      />
    </div>
  )
}
