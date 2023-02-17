import React from "react"
import propTypes from "prop-types"
import sortIcon from "../../../assets/icons/sort.png"

export default function SortIcon(props) {
  const { click } = props
  SortIcon.propTypes = {
    /**
     * onclick sorting func
     */
    click: propTypes.func,
  }
  SortIcon.defaultProps = {
    click: null,
  }

  return (
    <div
      className="sort-icon"
      onClick={click}
      role="button"
      tabIndex="0"
      onKeyDown={click}
    >
      <img src={sortIcon} alt="sort" />
    </div>
  )
}
