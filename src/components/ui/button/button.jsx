import React from "react"
import "./style.css"
import propTypes from "prop-types"
import LoadRing from "../Loading-ring/load-ring"

export default function Button(props) {
  const { text, click, className, disabled, secondary, loading } = props

  const buttonClasses = className
    ? ["button", ...className.split(" ")]
    : ["button"]
  if (disabled) buttonClasses.push("button_disabled")
  if (secondary) buttonClasses.push("button_secondary")

  Button.propTypes = {
    /**
     *  Button classes
     */
    className: propTypes.string,
    /**
     * Text on the button
     */
    text: propTypes.string,
    /**
     * Onclick action
     */
    click: propTypes.func,
    /**
     * Makes button disabled for operations
     */
    disabled: propTypes.bool,
    /**
     * Enables secondary button look
     */
    secondary: propTypes.bool,
    /**
     * Adds animated loading ring
     */
    loading: propTypes.bool,
  }

  Button.defaultProps = {
    className: undefined,
    text: "insert text",
    disabled: false,
    click: undefined,
    secondary: false,
    loading: false,
  }
  if (loading) {
    return (
      <div
        className={buttonClasses.join(" ")}
        onClick={click}
        role="button"
        tabIndex="0"
        onKeyDown={click}
      >
        {text} <LoadRing />
      </div>
    )
  }

  return (
    <div
      className={buttonClasses.join(" ")}
      onClick={click}
      role="button"
      tabIndex="0"
      onKeyDown={click}
    >
      {text}
    </div>
  )
}
