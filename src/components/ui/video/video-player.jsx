import React from "react"
import propTypes from "prop-types"
import ReactPlayer from "react-player"

export default function VideoPlayer(props) {
  const { url, func } = props
  VideoPlayer.propTypes = {
    /**
     * url of the displayed video
     */
    url: propTypes.string.isRequired,
    /**
     * closing function that needs to be passed
     */
    func: propTypes.func,
  }
  VideoPlayer.defaultProps = {
    func: null,
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
        url={url}
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
      {/* <div
        className="thumbnail-wrapper"
        role="button"
        tabIndex="0"
        onKeyDown={toggleVisibility}
        onClick={toggleVisibility}
      >
        <div className="play-icon">
          <img src={Play} alt="" />
        </div>
        <img src={findPreview(url)} alt="" />
      </div>
      <h3>{data.title}</h3>
      {data.description}
    */}
    </div>
  )
}
