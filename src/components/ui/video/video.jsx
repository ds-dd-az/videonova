import React from "react"
import ReactPlayer from "react-player"
import propTypes from "prop-types"
import "./style.css"

export default function Video(props) {
  return (
    <div className="player-wrapper">
      <ReactPlayer
        className="react-player"
        controls={false}
        url="https://www.youtube.com/watch?v=VSNb6944cE8"
        width="314px"
        height="174px"
        playsinline
        config={{
          youtube: {
            playerVars: {
              showinfo: 0,
              controls: 0,
              iv_load_policy: 3,
            },
          },
        }}
      />
    </div>
  )
}
