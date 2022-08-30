import React from "react"
import "./style.css"
import propTypes from "prop-types"
import UserIcon from "../user-icon/user-icon"
import Button from "../button/button"
import UserStats from "./user-card__stats/user-card__stats"

export default function UserCard(props) {
  const { userName } = props
  UserCard.propTypes = {
    /**
     * name of user on card
     */
    userName: propTypes.string,
  }
  UserCard.defaultProps = {
    userName: "User Name",
  }
  return (
    <div className="user-card">
      <UserIcon />
      <h3>{userName}</h3>
      <UserStats />
      <Button text="To profile" />
    </div>
  )
}
