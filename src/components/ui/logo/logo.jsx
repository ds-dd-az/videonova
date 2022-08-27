import React from "react"
import propTypes from "prop-types"
import BlueLogo from "../../../assets/logo-blue.png"
import WhiteLogo from "../../../assets/logo-white.png"

export default function Logo(props) {
  const { color } = props
  Logo.propTypes = {
    color: propTypes.string.isRequired,
  }
  const blueLogo = {
    src: BlueLogo,
    alt: "logo",
  }
  const whiteLogo = {
    src: WhiteLogo,
    alt: "logo",
  }
  if (color === "blue") {
    return (
      <div className="logo">
        <img src={blueLogo.src} alt={blueLogo.alt} />
      </div>
    )
  }

  if (color === "white") {
    return (
      <div className="logo">
        <img src={whiteLogo.src} alt={whiteLogo.alt} />
      </div>
    )
  }
}
