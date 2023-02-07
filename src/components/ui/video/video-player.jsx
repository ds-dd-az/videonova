import React from "react"
import propTypes from "prop-types"
import ReactPlayer from "react-player"
import Thumbnail from "./video-thumbnail"
import "./style.css"

export default function VideoPlayer(props) {
  const { data, func, src } = props
  VideoPlayer.propTypes = {
    /**
     * all the information about the displayed video
     */
    data: propTypes.objectOf(propTypes.string).isRequired,
    /**
     * closing function that needs to be passed
     */
    func: propTypes.func,
    /**
     * source of preview image
     */
    src: propTypes.string,
  }
  VideoPlayer.defaultProps = {
    func: null,
    src: "https://picsum.photos/320/200",
  }
  return (
    <div className="video-component">
      <div
        className="closing-div"
        onClick={func}
        role="button"
        tabIndex={0}
        onKeyDown={func}
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
