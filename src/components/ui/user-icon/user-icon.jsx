import React from "react"
import "./style.css"
import propTypes from "prop-types"

export default function UserIcon(props) {
  const { size, className } = props
  const userIconClasses = className
    ? ["user-icon", ...className.split(" ")]
    : ["user-icon"]
  userIconClasses.push(`user-icon_${size}`)

  UserIcon.propTypes = {
    /**
     * size of the user icon
     */
    size: propTypes.oneOf(["big", "small", "medium"]),
    /**
     * class name of icon
     */
    className: propTypes.string,
  }

  UserIcon.defaultProps = {
    className: undefined,
  }

  UserIcon.defaultProps = {
    size: "big",
  }
  return (
    <div className={userIconClasses.join(" ")}>
      <img src="https://picsum.photos/200" alt="your avatar" />
    </div>
  )
}
