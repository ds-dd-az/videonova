import React from "react"
import propTypes from "prop-types"
import LikeIcon from "../../../../assets/icons/like-icon.png"
import VideoIcon from "../../../../assets/icons/video-icon-stats.png"

export default function UserStats(props) {
  const { videosAmount, likesAmount } = props
  UserStats.propTypes = {
    /**
     * amount of users videos
     */
    videosAmount: propTypes.number,
    /**
     * amount of users likes
     */
    likesAmount: propTypes.number,
  }
  UserStats.defaultProps = {
    videosAmount: 0,
    likesAmount: 100,
  }
  return (
    <div className="user-card__stats">
      <div className="like-video-count">
        <img src={VideoIcon} alt="uploaded videos" />
        {videosAmount} videos
      </div>
      <div className="like-video-count">
        <img src={LikeIcon} alt="likes" />
        {likesAmount} likes
      </div>
    </div>
  )
}
