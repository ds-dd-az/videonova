import React from "react"
import "./style.css"
import { useSelector } from "react-redux"
import UserIcon from "../user-icon/user-icon"
import Button from "../button/button"
import UserStats from "./user-card__stats/user-card__stats"
import { selectOthersUserName, selectOthersUserId } from "../../../modules/user"

export default function UserCard() {
  const userName = useSelector(selectOthersUserName)
  const userId = useSelector(selectOthersUserId)
  function redirect() {
    window.location.href = `http://localhost:3000/user/${userId}`
  }

  return (
    <div className="user-card">
      <UserIcon size="medium" />
      <h3>{userName}</h3>
      <UserStats />
      {/* eslint-disable-next-line react/jsx-no-bind */}
      <Button text="To profile" click={redirect} />
    </div>
  )
}
