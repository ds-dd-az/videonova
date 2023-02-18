import React from "react"
import propTypes from "prop-types"
import "../../../styles/user-card/user-card.css"
import UserIcon from "../user-icon/user-icon"
import Button from "../button/button"
import UserStats from "./user-card__stats/user-card__stats"
import Heading from "../headings/headings"

export default function UserCard(props) {
  const { data, vidAmount, likeAmount, redirectFunc } = props
  UserCard.propTypes = {
    /**
     * data of user that will be displayed
     */
    data: propTypes.objectOf(propTypes.string),
    /**
     * amount of users` videos
     */
    vidAmount: propTypes.number,
    /**
     * amount of likes user recieved
     */
    likeAmount: propTypes.number,
    /**
     * redirect function to open this user`s page
     */
    redirectFunc: propTypes.func,
  }
  UserCard.defaultProps = {
    data: { userPic: "https://picsum.photos/200", userName: "New User" },
    vidAmount: 100,
    likeAmount: 100,
    redirectFunc: null,
  }

  return (
    <div className="user-card">
      <UserIcon iconSrc={data.userPic} size="medium" />
      <Heading size={3}>{data.userName}</Heading>
      <UserStats videos={vidAmount} likes={likeAmount} />
      <Button text="To profile" click={() => redirectFunc(data.id)} />
    </div>
  )
}
