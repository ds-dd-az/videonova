import React, { useState } from "react"
import propTypes from "prop-types"
import Regular from "../../../../../assets/icons/eye-icon.png"
import Crossed from "../../../../../assets/icons/crossed-eye-icon.png"

export default function EyeToggle(props) {
  const { click } = props
  EyeToggle.propTypes = {
    /**
     * onclick function, preferably should be the one that changes text visibility
     */
    click: propTypes.func.isRequired,
  }

  const [crossed, setCrossed] = useState(false)
  const icon = crossed ? Crossed : Regular
  function toggle() {
    setCrossed(!crossed)
    click()
  }
  const classNames = crossed ? "eye-icon eye-icon_crossed" : "eye-icon"
  return (
    <div
      className={classNames}
      onClick={() => toggle()}
      onKeyDown={() => toggle()}
      tabIndex="0"
      role="button"
    >
      <img src={icon} alt="" />
    </div>
  )
}
