import React, { useState } from "react"
import propTypes from "prop-types"
import "./style.css"
import Regular from "./eye-icon.png"
import Crossed from "./crossed-eye-icon.png"

export default function EyeToggle(props) {
  const { click } = props

  EyeToggle.propTypes = {
    /**
     * onclick function
     */
    click: propTypes.func,
  }

  EyeToggle.defaultProps = {
    click: undefined,
  }

  const [variant, setVariant] = useState("regular")
  const regularIcon = {
    src: Regular,
    alt: "eye",
  }
  const crossedIcon = {
    src: Crossed,
    alt: "crossed eye",
  }
  let icon = regularIcon

  function changeIcon() {
    if (variant === "regular") {
      setVariant("crossed")
      icon = regularIcon
    }
    if (variant === "crossed") {
      setVariant("regular")
      icon = crossedIcon
    }
  }
  function toggleFunctions() {
    EyeToggle.click()

    changeIcon()
  }

  return (
    <div
      className="eye-icon"
      onClick={toggleFunctions}
      onKeyDown={toggleFunctions}
      tabIndex="0"
      role="button"
    >
      <img src={icon.src} alt={icon.alt} />
    </div>
  )
}
