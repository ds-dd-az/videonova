import React from "react"
import propTypes from "prop-types"
import sortIcon from "../../../assets/icons/sort.png"
import "./style.css"

export default function SortIcon(props) {
  const { click } = props
  SortIcon.propTypes = {
    click: propTypes.func,
  }
  SortIcon.defaultProps = {
    click: null,
  }

  const icon = {
    src: sortIcon,
    alt: "sort",
  }
  return (
    <div
      className="sort-icon"
      onClick={click}
      role="button"
      tabIndex="0"
      onKeyDown={click}
    >
      <img src={icon.src} alt={icon.alt} />
    </div>
  )
}
