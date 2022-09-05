import React from "react"
import "./style.css"
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

export default function UserStats() {
  return (
    <div className="user-card__stats">
      <div className="like-video-count">
        <img src={videoIcon.src} alt={videoIcon.alt} />
        {25} videos
      </div>
      <div className="like-video-count">
        <img src={likeIcon.src} alt={likeIcon.alt} />
        {100} likes
      </div>
    </div>
  )
}
