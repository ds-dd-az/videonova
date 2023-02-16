import React from "react"
import "../../../styles/user-icon/user-icon.css"
import propTypes from "prop-types"

export default function UserIcon(props) {
  const { size, className, iconSrc } = props
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
     * additional class name of icon(if needed)
     */
    className: propTypes.string,
    /**
     * source of userIcon
     */
    iconSrc: propTypes.string,
  }

  UserIcon.defaultProps = {
    className: null,
    iconSrc: "https://picsum.photos/200",
  }

  UserIcon.defaultProps = {
    size: "big",
  }
  return (
    <div className={userIconClasses.join(" ")}>
      <img src={iconSrc} alt="your avatar" />
    </div>
  )
}
