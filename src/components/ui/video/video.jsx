import React, { useState } from "react"
import ReactPlayer from "react-player"
import propTypes from "prop-types"
import "./style.css"
import Play from "./play-icon.png"

const play = {
  src: Play,
  alt: "",
}

export default function Video(props) {
  const { videoUrl, videoName, videoDescription } = props
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
  }

  Video.defaultProps = {
    videoUrl: "https://www.youtube.com/watch?v=VSNb6944cE8",
    videoName: "Your great video",
    videoDescription: "very great video, everyone likes it",
  }
  const [visibility, setVisibility] = useState(false)
  function toggleVisibility() {
    setVisibility(!visibility)
  }

  if (visibility) {
    return (
      <div className="video-component">
        {/* eslint-disable-next-line jsx-a11y/interactive-supports-focus,jsx-a11y/click-events-have-key-events */}
        <div className="closing-div" onClick={toggleVisibility} role="button" />
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
          <div className="play-icon">
            <img src={play.src} alt={play.alt} />
          </div>
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
        <div className="play-icon">
          <img src={play.src} alt={play.alt} />
        </div>
        <img src={`https://img.youtube.com/vi/${videoId}/0.jpg`} alt="" />
      </div>
      <h3>{videoName}</h3>
      {videoDescription}
    </div>
  )
}
