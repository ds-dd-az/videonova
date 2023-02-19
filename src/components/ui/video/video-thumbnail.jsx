import React from "react"
import propTypes from "prop-types"
import Play from "../../../assets/icons/play-icon.png"
import Heading from "../headings/headings"

export default function Thumbnail(props) {
  const { data, src, func } = props
  Thumbnail.propTypes = {
    /**
     * all the information about the displayed video
     */
    data: propTypes.objectOf(propTypes.string).isRequired,
    /**
     * function which will open and close video player
     */
    func: propTypes.func,
    /**
     * source of preview image
     */
    src: propTypes.string,
  }
  Thumbnail.defaultProps = {
    func: null,
    src: "https://picsum.photos/320/200",
  }
  return (
    <div className="thumbnail-wrapper">
      <div
        className="preview"
        role="button"
        tabIndex="0"
        onKeyDown={func}
        onClick={func}
      >
        <div className="play-icon">
          <img src={Play} alt="" />
        </div>
        <img src={src} alt="" />
      </div>
      <Heading size={3}>{data.title}</Heading>
      {data.description}
    </div>
  )
}
