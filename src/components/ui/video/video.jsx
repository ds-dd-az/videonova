/* eslint-disable prefer-destructuring */
/* eslint-disable react/prop-types */
import React, { useState } from "react"
import ReactPlayer from "react-player"
import "./style.css"
import Play from "./play-icon.png"
import findPreview from "../../../external_func/find-preview-src/find-preview-src"
import VideoPlayer from "./video-player"

export default function Video({ data }) {
  const url = data.url
  const [visibility, setVisibility] = useState(false)
  function toggleVisibility() {
    setVisibility(!visibility)
  }
  const imgSrc = findPreview(url)
  if (visibility) {
    return <VideoPlayer url={url} func={() => toggleVisibility()} />
  }

  return (
    <div className="video-component">
      <div
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
    </div>
  )
}
