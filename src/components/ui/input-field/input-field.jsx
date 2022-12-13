import React, { useState } from "react"
import "./style.css"
import propTypes from "prop-types"
import EyeToggle from "./eye-toggle/eye-toggle"

export default function InputField(props) {
  const { placeholder, error, id, variant } = props
  const [input, setInput] = useState("")
  InputField.propTypes = {
    /**
     * default text on input field
     */
    placeholder: propTypes.string,
    /**
     * provides unique id
     */
    id: propTypes.string.isRequired,
    /**
     *  turns error effect on
     */
    error: propTypes.bool,
    /**
     * variant of input field
     */
    variant: propTypes.oneOf(["password", "smallText", "bigText"]).isRequired,
  }
  InputField.defaultProps = {
    placeholder: "insert text please",
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
  if (variant === "bigText") {
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
  if (variant === "password") {
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
        type="text"
        placeholder={placeholder}
      />
    </div>
  )
}
