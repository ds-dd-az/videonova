import React from "react"
import propTypes, { node, string } from "prop-types"
import "../../../styles/headings/headings.css"

/**
 * Headings component
 * @param children - string or/and node, displayed text or node with text inside, in h1 this nodes content will be red
 * @param size - one of [1, 2, 3], determines size of heading 1 returns h1 etc
 * @returns Heading of mentioned size
 */
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
