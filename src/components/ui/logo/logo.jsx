import React from "react"
import propTypes from "prop-types"
import BlueLogo from "../../../assets/logos/logo-blue.png"
import WhiteLogo from "../../../assets/logos/logo-white.png"

export default function Logo(props) {
  const { color } = props
  Logo.propTypes = {
    color: propTypes.string.isRequired,
  }
  if (color === "blue") {
    return (
      <div className="logo-blue">
        <img src={BlueLogo} alt="videonova" />
      </div>
    )
  }

  if (color === "white") {
    return (
      <div className="logo-white">
        <img src={WhiteLogo} alt="videonova" />
      </div>
    )
  }
}
