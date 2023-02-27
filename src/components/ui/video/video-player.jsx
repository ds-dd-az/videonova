import React from "react"
import propTypes from "prop-types"
import ReactPlayer from "react-player"
import Thumbnail from "./video-thumbnail"
import "../../../styles/video/video.css"

export default function VideoPlayer(props) {
  const { data, closingFunc, src } = props
  VideoPlayer.propTypes = {
    /**
     * all the information about the displayed video
     */
    data: propTypes.objectOf(propTypes.string).isRequired,
    /**
     * closing function that needs to be passed
     */
    closingFunc: propTypes.func,
    /**
     * source of preview image
     */
    src: propTypes.string,
  }
  VideoPlayer.defaultProps = {
    closingFunc: null,
    src: "https://picsum.photos/320/200",
  }
  return (
    <div className="video-component">
      <div
        className="closing-div"
        onClick={closingFunc}
        role="button"
        tabIndex={0}
        onKeyDown={closingFunc}
      />
      <ReactPlayer
        className="react-player"
        url={data.url}
        width="854px"
        height="480px"
        playing
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
      <Thumbnail data={data} src={src} />
    </div>
  )
}
