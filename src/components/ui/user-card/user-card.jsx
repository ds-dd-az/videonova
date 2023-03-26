import React from "react"
import propTypes from "prop-types"
import "../../../styles/user-card/user-card.css"
import { Link } from "react-router-dom"
import UserIcon from "../user-icon/user-icon"
import Button from "../button/button"
import UserStats from "./user-card__stats/user-card__stats"
import Heading from "../headings/headings"

/**
 * User's card for the home page
 * @param data - object of strings, data of user that will be displayed
 * @param vidAmount - number, amount of users' videos
 * @param likeAmount - number, amount of likes user recieved
 * @param redirectFunc - func, redirection function to open this user`s page
 * @returns node, user's card with provided info
 */
export default function UserCard(props) {
  const { data, vidAmount, likeAmount } = props
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
  }
  UserCard.defaultProps = {
    data: {
      userPic: "https://picsum.photos/200",
      userName: "New User",
      id: "1",
    },
    vidAmount: 100,
    likeAmount: 100,
  }

  return (
    <div className="user-card">
      <UserIcon iconSrc={data.userPic} size="medium" />
      <Heading size={3}>{data.userName}</Heading>
      <UserStats videosAmount={vidAmount} likesAmount={likeAmount} />
      <Link to={`videonova/user/${data.id}`} style={{ textDecoration: "none" }}>
        <Button text="To profile" />
      </Link>
    </div>
  )
}
