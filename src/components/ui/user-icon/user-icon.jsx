import React from "react"
import "../../../styles/user-icon/user-icon.css"
import propTypes from "prop-types"

/**
 * User icon component
 * @param size - string, possible values: "big", "small", "medium" - determines size of the icon
 * big is 154x154px, medium 133x133px, small 54x54px
 * @param className - string, additional class name of icon(if needed)
 * @param iconSrc - string, source of the icon
 * @returns node, user's icon
 */
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
