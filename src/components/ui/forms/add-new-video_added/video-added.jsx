import React from "react"
import "../style.css"
import propTypes from "prop-types"
import Button from "../../button/button"

export default function VideoAdded(props) {
  const { img } = props
  VideoAdded.propTypes = {
    img: propTypes.string,
  }
  VideoAdded.defaultProps = {
    img: "https://picsum.photos/400/200",
  }
  return (
    <div className="video-added">
      <h1>Video succesfully added</h1>
      <div>
        <div className="vid-preview">
          <img src={`${img}`} alt="prev" />
        </div>
        <Button text="To video" />
      </div>
    </div>
  )
}
