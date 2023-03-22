import React from "react"
import propTypes from "prop-types"
import "../../../styles/loading-ring/loading-ring.css"

/**
 * Loading spinner component
 * @param isBig - bool, determines size of the ring, small for buttons, big for pages
 * @returns node, spinning ring of requested size
 */
export default function LoadRing(props) {
  const { isBig } = props
  LoadRing.propTypes = {
    /**
     * determines size of the ring, small for buttons, big for pages
     */
    isBig: propTypes.bool,
  }
  LoadRing.defaultProps = {
    isBig: false,
  }
  const ringClassName = isBig ? "ring ring-big" : "ring"
  return (
    <div className={ringClassName}>
      <div />
      <div />
      <div />
      <div />
    </div>
  )
}
