import React, { useState } from "react"
import propTypes from "prop-types"
import EyeToggle from "./eye-toggle/eye-toggle"

/**
 * Input Field component
 * @param placeholder - string, default text on input field
 * @param error - bool, turns error effect on by highlighting field with red border
 * @param id - string, id of the component
 * @param variant - possible values: "password", "smallText", "bigText" - returns input field of mentioned variant
 * @returns Input field with specified parameters
 */
export default function InputField(props) {
  const { placeholder, error, id, variant } = props
  const [input, setInput] = useState("")
  InputField.propTypes = {
    /**
     * default text on input field
     */
    placeholder: propTypes.string,
    /**
     * id of the component
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
  const changeHide = () => {
    setHiding(!hiding)
  }
  const type = hiding && variant === "password" ? "password" : "text"
  const styles = ["field"]
  if (error) {
    styles.push("field_red")
  }
  if (variant === "bigText") {
    styles.push("field_big")
    return (
      <div className="field-wrapper">
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
  return (
    <div className="field-wrapper">
      <input
        value={input}
        onInput={(e) => setInput(e.target.value)}
        id={id}
        className={styles.join(" ")}
        type={type}
        placeholder={placeholder}
      />
      {variant === "password" ? <EyeToggle click={changeHide} /> : null}
    </div>
  )
}
