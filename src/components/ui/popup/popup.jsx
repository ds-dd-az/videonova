import React from "react"
import "../../../styles/popup/popup.css"
import propTypes from "prop-types"

export default function Popup(props) {
  const { children, isVisible } = props
  Popup.propTypes = {
    /**
     * components in the popup
     */
    children: propTypes.node,
    /**
     * determines popup`s visibility
     */
    isVisible: propTypes.bool.isRequired,
  }

  Popup.defaultProps = {
    children: null,
  }
  const style = isVisible ? "popup_show" : "popup_hide"
  return <div className={`popup ${style}`}>{children}</div>
}
