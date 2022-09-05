import React from "react"
import ReactPlayer from "react-player"
import propTypes from "prop-types"
import "./style.css"

export default function Video(props) {
  const { videoName, videoDescription } = props
  let { videoUrl } = props
  videoUrl = "https://www.youtube.com/watch?v=rYNF_541naM"
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
  }

  Video.defaultProps = {
    videoUrl: "https://www.youtube.com/watch?v=VSNb6944cE8",
    videoName: "Your great video",
    videoDescription: "very great video, everyone likes it",
  }

  return (
    <div className="video-component">
      <ReactPlayer
        className="react-player"
        url={videoUrl}
        width="314px"
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
      <div className="thumbnail-wrapper">
        <img src={`https://img.youtube.com/vi/${videoId}/0.jpg`} alt="" />
      </div>
      <h3>{videoName}</h3>
      {videoDescription}
    </div>
  )
}
