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

  const [crossed, setCrossed] = useState(false)
  const regularIcon = {
    src: Regular,
    alt: "eye",
  }
  const crossedIcon = {
    src: Crossed,
    alt: "crossed eye",
  }
  const icon = crossed ? regularIcon : crossedIcon

  function toggle() {
    setCrossed(!crossed)
  }
  return (
    <div
      className="eye-icon"
      onClick={toggle}
      onKeyDown={toggle}
      tabIndex="0"
      role="button"
    >
      <img src={icon.src} alt={icon.alt} />
    </div>
  )
}
