import React from "react"
import ReactPlayer from "react-player"
import propTypes from "prop-types"
import fitvids from "fitvids"
import "./style.css"

export default function Video(props) {
  const { videoUrl, videoName, videoDescription } = props
  Video.propTypes = {
    /**
     * url of video that will be shown
     */
    videoUrl: propTypes.string,
    /**
     * name of video
     */
    videoName: propTypes.string,
    /**
     * description
     */
    videoDescription: propTypes.string,
  }

  Video.defaultProps = {
    videoUrl: "https://www.youtube.com/watch?v=VSNb6944cE8",
    videoName: "Your great video",
    videoDescription: "very great video, everyone likes it",
  }

  fitvids()
  return (
    <div className="video-component">
      <div className="player-wrapper">
        <ReactPlayer
          className="react-player"
          url={videoUrl}
          width="314px"
          playing
          light
          playsinline
          config={{
            youtube: {
              playerVars: {
                showinfo: 0,
                iv_load_policy: 3,
              },
            },
          }}
        />
      </div>
      <h3>{videoName}</h3>
      {videoDescription}
    </div>
  )
}
