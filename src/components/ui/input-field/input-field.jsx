import React, { useState } from "react"
import "./style.css"
import propTypes from "prop-types"
import EyeToggle from "./eye-toggle/eye-toggle"

export default function InputField(props) {
  const { isBig, hide, placeholder, withIcon, id } = props
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
     * provides another id
     */
    id: propTypes.string,
  }
  InputField.defaultProps = {
    isBig: false,
    hide: false,
    placeholder: "insert text please",
    withIcon: false,
    id: undefined,
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
          id={id}
          value={input}
          onInput={(e) => setInput(e.target.value)}
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
            id={id}
            value={input}
            onInput={(e) => setInput(e.target.value)}
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
          value={input}
          onInput={(e) => setInput(e.target.value)}
          id={id}
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
        value={input}
        onInput={(e) => setInput(e.target.value)}
        id={id}
        className={Styles.join(" ")}
        type="text"
        placeholder={placeholder}
      />
    </div>
  )
}
