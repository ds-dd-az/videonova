import React, { useState } from "react"
import "./style.css"
import propTypes from "prop-types"
import EyeToggle from "./eye-toggle/eye-toggle"

export default function InputField(props) {
  const { isBig, hide, placeholder, withIcon, error, id } = props
  const [input, setInput] = useState("")
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
    /**
     * provides unique id
     */
    id: propTypes.string.isRequired,
    /**
     *  turns error effect on
     */
    error: propTypes.bool,
  }
  InputField.defaultProps = {
    isBig: false,
    hide: false,
    placeholder: "insert text please",
    withIcon: false,
    error: false,
  }
  const [hiding, setHiding] = useState(true)
  function changeHide() {
    setHiding(!hiding)
  }
  const type = hiding ? "password" : "text"
  const styles = ["field"]
  if (error) {
    styles.push("field_red")
  }
  if (isBig) {
    styles.push("field_big")
    return (
      <div>
        <textarea
          id={id}
          value={input}
          onInput={(e) => setInput(e.target.value)}
          maxLength={445}
          className={styles.join(" ")}
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
            id={id}
            value={input}
            onInput={(e) => setInput(e.target.value)}
            className={styles.join(" ")}
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
          value={input}
          onInput={(e) => setInput(e.target.value)}
          id={id}
          className={styles.join(" ")}
          type="password"
          placeholder={placeholder}
        />
      </div>
    )
  }

  return (
    <div>
      <input
        value={input}
        onInput={(e) => setInput(e.target.value)}
        id={id}
        className={styles.join(" ")}
        type="text"
        placeholder={placeholder}
      />
    </div>
  )
}
