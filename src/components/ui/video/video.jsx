import React, { useState } from "react"
import ReactPlayer from "react-player"
import propTypes from "prop-types"
import "./style.css"

export default function Video(props) {
  const { videoUrl, videoName, videoDescription, playerVisible } = props
  let videoId = videoUrl.split("v=")[1]
  const ampersandPosition = videoId.indexOf("&")
  if (ampersandPosition !== -1) {
    videoId = videoId.substring(0, ampersandPosition)
  }
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
    /**
     * visibility of big player
     */
    playerVisible: propTypes.bool,
  }

  Video.defaultProps = {
    videoUrl: "https://www.youtube.com/watch?v=VSNb6944cE8",
    videoName: "Your great video",
    videoDescription: "very great video, everyone likes it",
    playerVisible: false,
  }
  const [visibility, setVisibility] = useState(false)
  function toggleVisibility() {
    setVisibility(!visibility)
  }

  if (visibility) {
    return (
      <div className="video-component">
        <ReactPlayer
          className="react-player"
          url={videoUrl}
          width="854px"
          height="480px"
          config={{
            youtube: {
              playerVars: {
                controls: 1,
                showinfo: 0,
                iv_load_policy: 3,
              },
            },
          }}
        />
        <div
          className="thumbnail-wrapper"
          role="button"
          tabIndex="0"
          onKeyDown={toggleVisibility}
          onClick={toggleVisibility}
        >
          <img src={`https://img.youtube.com/vi/${videoId}/0.jpg`} alt="" />
        </div>
        <h3>{videoName}</h3>
        {videoDescription}
      </div>
    )
  }

  return (
    <div className="video-component">
      <div
        className="thumbnail-wrapper"
        role="button"
        tabIndex="0"
        onKeyDown={toggleVisibility}
        onClick={toggleVisibility}
      >
        <img src={`https://img.youtube.com/vi/${videoId}/0.jpg`} alt="" />
      </div>
      <h3>{videoName}</h3>
      {videoDescription}
    </div>
  )
}
