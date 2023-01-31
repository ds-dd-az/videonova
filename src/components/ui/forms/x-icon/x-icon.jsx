import React from "react"
import propTypes from "prop-types"
import Icon from "../../../../assets/icons/close-form.png"
import "../style.css"

export default function XIcon(props) {
  const { click } = props
  XIcon.propTypes = {
    click: propTypes.func.isRequired,
  }
  return (
    <div
      className="x-icon"
      role="button"
      onClick={click}
      tabIndex={0}
      onKeyDown={click}
    >
      <img src={Icon} alt="close form" />
    </div>
  )
}
