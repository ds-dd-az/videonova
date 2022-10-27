import React from "react"
import "./style.css"
import propTypes from "prop-types"
import LikeIcon from "./like-icon.png"
import VideoIcon from "./video-icon.png"

const videoIcon = {
  src: VideoIcon,
  alt: "uploaded videos",
}
const likeIcon = {
  src: LikeIcon,
  alt: "likes",
}

export default function UserStats(props) {
  const { videos, likes } = props
  UserStats.propTypes = {
    /**
     * amount of users videos
     */
    videos: propTypes.number,
    /**
     * amount of users likes
     */
    likes: propTypes.number,
  }
  UserStats.defaultProps = {
    videos: 25,
    likes: 100,
  }
  return (
    <div className="user-card__stats">
      <div className="like-video-count">
        <img src={videoIcon.src} alt={videoIcon.alt} />
        {videos} videos
      </div>
      <div className="like-video-count">
        <img src={likeIcon.src} alt={likeIcon.alt} />
        {likes} likes
      </div>
    </div>
  )
}
