import React from "react"
import propTypes from "prop-types"
import Button from "../../button/button"
import CheckIcon from "../../../../assets/icons/check-icon.svg"
import CloseForm from "../../../../containers/close-form-button/close-form-button"
import Heading from "../../headings/headings"

export default function VideoAdded(props) {
  const { img } = props
  VideoAdded.propTypes = {
    /**
     * image preview of the added video
     */
    img: propTypes.string,
  }
  VideoAdded.defaultProps = {
    img: "https://picsum.photos/400/200",
  }
  return (
    <div className="video-added">
      <Heading size={1}>
        Add <span>New</span> Video
      </Heading>
      <div>
        <div className="vid-preview">
          <div className="vid-preview__shadow" />
          <img src={`${img}`} className="vid-preview__image" alt="prev" />
          <img src={CheckIcon} className="vid-preview__check-icon" alt="done" />
        </div>
        <Heading size={2}>Succesfull</Heading>
        <CloseForm>
          <Button text="To video" />
        </CloseForm>
      </div>
    </div>
  )
}
