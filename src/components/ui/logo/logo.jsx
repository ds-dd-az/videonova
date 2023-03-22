import React from "react"
import propTypes from "prop-types"
import { Link } from "react-router-dom"
import blueLogo from "../../../assets/logos/logo-blue.png"
import whiteLogo from "../../../assets/logos/logo-white.png"

/**
 * Logo component
 * @param color - string, possible values: "white", "blue" - determines logo`s color
 * @returns node, app`s logo of requested color
 */
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
      <Link to="/">
        <img src={img} alt="videonova" />
      </Link>
    </div>
  )
}
