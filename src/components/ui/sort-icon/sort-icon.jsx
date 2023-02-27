import React from "react"
import propTypes from "prop-types"
import sortIcon from "../../../assets/icons/sort.png"

/**
 * @param clickFunc "function that will be performed on click"
 * @returns node
 */
export default function SortIcon(props) {
  const { clickFunc } = props
  SortIcon.propTypes = {
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
