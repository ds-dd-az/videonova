import React from "react"
import propTypes from "prop-types"
import CheckIcon from "../../../../assets/icons/check-icon.svg"
import Heading from "../../../../components/ui/headings/headings"

/**
 * Video added message component displayed after adding video in videoform
 * @param img - string, source of preview image of added video
 * @param formCloser - node, component with closing function
 * @returns node, video added message component
 */
export default function VideoAddedMessage(props) {
  const { img, formCloser } = props
  VideoAddedMessage.propTypes = {
    /**
     * source of preview image of added video
     */
    img: propTypes.string,
    /**
     * component with closing function
     */
    formCloser: propTypes.node,
  }
  VideoAddedMessage.defaultProps = {
    img: "https://picsum.photos/400/200",
    formCloser: null,
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
        {formCloser}
      </div>
    </div>
  )
}
