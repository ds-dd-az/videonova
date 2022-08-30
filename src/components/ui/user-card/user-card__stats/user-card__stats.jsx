import React from "react"
import "./style.css"
import propTypes from "prop-types"
import LikeIcon from "./like-icon.png"
import VideoIcon from "./video-icon.png"

export default function UserStats(props) {
  const videoIcon = {
    src: VideoIcon,
    alt: "uploaded videos",
  }
  const likeIcon = {
    src: LikeIcon,
    alt: "likes",
  }
  const { likes, videos } = props
  UserStats.propTypes = {
    /**
     * amount of videos uploaded
     */
    videos: propTypes.string,
    /**
     *  amount of likes for that videos
     */
    likes: propTypes.string,
  }
  UserStats.defaultProps = {
    videos: "100",
    likes: "100",
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
