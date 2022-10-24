/* eslint-disable prefer-destructuring */
/* eslint-disable react/prop-types */
import React, { useState } from "react"
import ReactPlayer from "react-player"
import "./style.css"
import Play from "./play-icon.png"

const play = {
  src: Play,
  alt: "",
}

export default function Video({ data }) {
  // eslint-disable-next-line prefer-destructuring
  const url = data.url
  let videoId
  if (url.includes("youtu.be")) {
    videoId = url.split("youtu.be/")[1]
  } else if (url.includes("embed/")) {
    videoId = url.split("embed/")[1]
  } else {
    videoId = url.split("v=")[1]
    if (videoId.includes("&")) {
      const ampersandPosition = videoId.indexOf("&")
      videoId = videoId.substring(0, ampersandPosition)
    }
  }
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
          url={data.url}
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
          <img src={`https://img.youtube.com/vi/${videoId}/0.jpg`} alt="" />
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
        <img src={`https://img.youtube.com/vi/${videoId}/0.jpg`} alt="" />
      </div>
      <h3>{data.title}</h3>
      {data.description}
    </div>
  )
}
