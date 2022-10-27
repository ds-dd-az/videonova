/* eslint-disable react/prop-types */
import React from "react"
import "./style.css"
import UserIcon from "../user-icon/user-icon"
import Button from "../button/button"
import UserStats from "./user-card__stats/user-card__stats"

export default function UserCard({ data, vidAmount, likeAmount }) {
  function redirect() {
    window.location.href = `http://localhost:3000/user/${data.id}`
  }

  return (
    <div className="user-card">
      <UserIcon iconSrc={data.userPic} size="medium" />
      <h3>{data.userName}</h3>
      <UserStats videos={vidAmount} likes={likeAmount} />
      {/* eslint-disable-next-line react/jsx-no-bind */}
      <Button text="To profile" click={redirect} />
    </div>
  )
}
