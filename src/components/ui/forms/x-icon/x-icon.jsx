import React from "react"
import Icon from "../../../../assets/icons/close-form.png"

/**
 * An icon shaped like x component
 * @returns node
 */
export default function XIcon() {
  return (
    <div className="x-icon">
      <img src={Icon} alt="close" />
    </div>
  )
}
