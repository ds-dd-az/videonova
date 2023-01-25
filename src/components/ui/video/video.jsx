/* eslint-disable prefer-destructuring */
/* eslint-disable react/prop-types */
import React, { useState } from "react"
import ReactPlayer from "react-player"
import "./style.css"
import Play from "./play-icon.png"
import findPreview from "../../../external_func/find-preview-src/find-preview-src"

const play = {
  src: Play,
  alt: "",
}

export default function Video({ data }) {
  const url = data.url
  const [visibility, setVisibility] = useState(false)
  function toggleVisibility() {
    setVisibility(!visibility)
  }

  if (visibility) {
    return (
      <div className="video-component">
        {/* eslint-disable-next-line jsx-a11y/interactive-supports-focus,jsx-a11y/click-events-have-key-events */}
        <div className="closing-div" onClick={toggleVisibility} role="button" />
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
        <div
          className="thumbnail-wrapper"
          role="button"
          tabIndex="0"
          onKeyDown={toggleVisibility}
          onClick={toggleVisibility}
        >
          <div className="play-icon">
            <img src={play.src} alt={play.alt} />
          </div>
          <img src={findPreview(url)} alt="" />
        </div>
        <h3>{data.title}</h3>
        {data.description}
      </div>
    )
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
          <img src={play.src} alt={play.alt} />
        </div>
        <img src={findPreview(url)} alt="" />
      </div>
      <h3>{data.title}</h3>
      {data.description}
    </div>
  )
}
