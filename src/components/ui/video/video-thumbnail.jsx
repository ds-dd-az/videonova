import React from "react"
import propTypes from "prop-types"
import Play from "../../../assets/icons/play-icon.png"
import "./style.css"

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
      <h3>{data.title}</h3>
      {data.description}
    </div>
  )
}
