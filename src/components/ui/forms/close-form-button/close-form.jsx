import React from "react"
import propTypes from "prop-types"
import Icon from "./close-form.png"
import "../style.css"

const xIcon = {
  src: Icon,
  alt: "close form",
}

export default function XIcon(props) {
  const { click } = props
  XIcon.propTypes = {
    /**
     * onclick function
     */
    click: propTypes.func,
  }
  XIcon.defaultProps = {
    click: undefined,
  }
  return (
    <div
      className="x-icon"
      role="button"
      onClick={click}
      tabIndex={0}
      onKeyDown={click}
    >
      <img src={xIcon.src} alt={xIcon.alt} />
    </div>
  )
}
