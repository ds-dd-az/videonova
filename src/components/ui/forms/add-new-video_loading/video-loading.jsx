import React from "react"
import "../style.css"
import propTypes from "prop-types"
import Button from "../../button/button"

export default function VideoLoading(props) {
  const { progress } = props
  VideoLoading.propTypes = {
    progress: propTypes.string,
  }
  VideoLoading.defaultProps = {
    progress: "loading...",
  }
  return (
    <div className="video-loading">
      <h1>Add New Video</h1>
      <div>
        <div className="vid-preview">
          <img src="https://picsum.photos/400/200" alt="prev" />
        </div>
        {progress}
        <Button text="To video" disabled />
      </div>
    </div>
  )
}
