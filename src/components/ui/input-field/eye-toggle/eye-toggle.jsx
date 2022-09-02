import React, { useState } from "react"
import propTypes from "prop-types"
import "./style.css"
import Regular from "./eye-icon.png"
import Crossed from "./crossed-eye-icon.png"

const regularIcon = {
  src: Regular,
  alt: "eye",
}
const crossedIcon = {
  src: Crossed,
  alt: "crossed eye",
}

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

  const icon = crossed ? regularIcon : crossedIcon
  function toggle() {
    setCrossed(!crossed)
  }
  const e = [{ click }, toggle]
  return (
    <div
      className="eye-icon"
      onClick={click}
      onKeyDown={click}
      tabIndex="0"
      role="button"
    >
      {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
      <img onClick={toggle} onKeyDown={toggle} src={icon.src} alt={icon.alt} />
    </div>
  )
}
