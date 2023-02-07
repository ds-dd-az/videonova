import React from "react"
import propTypes from "prop-types"
import blueLogo from "../../../assets/logos/logo-blue.png"
import whiteLogo from "../../../assets/logos/logo-white.png"

export default function Logo(props) {
  const { color } = props
  Logo.propTypes = {
    /**
     * color of the logo, may be "white" or "blue"
     */
    color: propTypes.oneOf(["white", "blue"]).isRequired,
  }

  const img = color === "blue" ? blueLogo : whiteLogo
  return (
    <div className={`logo-${color}`}>
      <img src={img} alt="videonova" />
    </div>
  )
}
