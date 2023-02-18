import React from "react"
import propTypes from "prop-types"
import "../../../styles/headings/headings.css"

export default function Heading(props) {
  const { size, mainText, redText } = props
  Heading.propTypes = {
    /**
     * displayed text
     */
    mainText: propTypes.string.isRequired,
    /**
     * part of text that we want to be red
     */
    redText: propTypes.string,
    /**
     * size of heading
     */
    size: propTypes.oneOf(1, 2, 3).isRequired,
  }
  Heading.defaultProps = {
    redText: "",
  }
  if (size === 1) {
    return (
      <h1>
        {mainText}
        <span>{redText}</span>
      </h1>
    )
  }
  if (size === 2) {
    return (
      <h2>
        {mainText}
        <span>{redText}</span>
      </h2>
    )
  }
  if (size === 3) {
    return (
      <h3>
        {mainText}
        <span>{redText}</span>
      </h3>
    )
  }
}
