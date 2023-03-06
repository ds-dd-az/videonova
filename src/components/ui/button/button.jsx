import React from "react"
import "../../../styles/button/button.css"
import propTypes from "prop-types"
import LoadRing from "../Loading-ring/load-ring"

/**
 * Button component
 * @param text - string, text content of the button
 * @param click - func, onclick function
 * @param className - string, additional classnames
 * @param disabled - bool, displays disabled button variant without pointer events
 * @param secondary - bool, displays secondary button variant
 * @param loading - bool, displays loading spinner in button
 * @returns node
 */
export default function Button(props) {
  const { text, click, className, disabled, secondary, loading } = props

  const buttonClasses = className
    ? ["button", ...className.split(" ")]
    : ["button"]
  if (disabled) buttonClasses.push("button_disabled")
  if (secondary) buttonClasses.push("button_secondary")

  Button.propTypes = {
    /**
     *  additional classNames
     */
    className: propTypes.string,
    /**
     * text content of the button
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
  return (
    <div
      className={buttonClasses.join(" ")}
      onClick={click}
      role="button"
      tabIndex="0"
      onKeyDown={click}
    >
      {loading ? <LoadRing /> : text}
    </div>
  )
}
