import React from "react"
import propTypes, { node, string } from "prop-types"
import "../../../styles/headings/headings.css"

export default function Heading(props) {
  const { children, size } = props
  Heading.propTypes = {
    /**
     * displayed text or node with text inside
     */
    children: propTypes.oneOfType([string, node]).isRequired,
    /**
     * size of heading
     */
    size: propTypes.oneOf([1, 2, 3]).isRequired,
  }
  if (size === 1) {
    return <h1>{children}</h1>
  }
  if (size === 2) {
    return <h2>{children}</h2>
  }
  if (size === 3) {
    return <h3>{children}</h3>
  }
}
