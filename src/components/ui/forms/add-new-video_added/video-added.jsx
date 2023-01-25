import React from "react"
import "../style.css"
import propTypes from "prop-types"
import Button from "../../button/button"
import CheckIcon from "../../../../assets/icons/check-icon.svg"

const checkIcon = {
  src: CheckIcon,
  alt: "done",
}
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
      <h1>Add New Video</h1>
      <div>
        <div className="vid-preview">
          <div className="vid-preview__shadow" />
          <img src={`${img}`} className="vid-preview__image" alt="prev" />
          <img
            src={checkIcon.src}
            className="vid-preview__check-icon"
            alt={checkIcon.alt}
          />
        </div>
        <h2>Successful</h2>
        <Button text="To video" />
      </div>
    </div>
  )
}
