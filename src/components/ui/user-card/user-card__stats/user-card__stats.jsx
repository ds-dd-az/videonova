import React from "react"
import "./style.css"
import propTypes from "prop-types"
import LikeIcon from "../../../../assets/icons/like-icon.png"
import VideoIcon from "../../../../assets/icons/video-icon-stats.png"

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
        <img src={VideoIcon} alt="uploaded videos" />
        {videos} videos
      </div>
      <div className="like-video-count">
        <img src={LikeIcon} alt="likes" />
        {likes} likes
      </div>
    </div>
  )
}
