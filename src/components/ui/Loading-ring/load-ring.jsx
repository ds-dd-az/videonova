import React from "react"
import propTypes from "prop-types"
import "../../../styles/loading-ring/loading-ring.css"

/**
 * Loading spinner component
 * @param isBig - bool, determines size of the ring, small for buttons, big for pages
 * @param className - string, additional classNames if needed
 * @returns node, spinning ring of requested size
 */
export default function LoadRing(props) {
  const { isBig, className } = props
  LoadRing.propTypes = {
    /**
     * determines size of the ring, small for buttons, big for pages
     */
    isBig: propTypes.bool,
    /**
     * additional classNames if needed
     */
    className: propTypes.string,
  }
  LoadRing.defaultProps = {
    isBig: false,
    className: undefined,
  }
  const ringClassName = className ? ["ring", ...className.split(" ")] : ["ring"]
  if (isBig) ringClassName.push("ring-big")
  return (
    <div className={ringClassName.join(" ")}>
      <div />
      <div />
      <div />
      <div />
    </div>
  )
}
