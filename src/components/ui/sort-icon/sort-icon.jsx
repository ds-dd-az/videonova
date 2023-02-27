import React from "react"
import propTypes from "prop-types"
import sortIcon from "../../../assets/icons/sort.png"

export default function SortIcon(props) {
  const { clickFunc } = props
  SortIcon.propTypes = {
    /**
     * onclick sorting func
     */
    clickFunc: propTypes.func,
  }
  SortIcon.defaultProps = {
    clickFunc: null,
  }

  return (
    <div
      className="sort-icon"
      onClick={clickFunc}
      role="button"
      tabIndex="0"
      onKeyDown={clickFunc}
    >
      <img src={sortIcon} alt="sort" />
    </div>
  )
}
