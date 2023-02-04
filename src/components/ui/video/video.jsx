import React, { useState } from "react"
import "./style.css"
import propTypes from "prop-types"
import findPreview from "../../../external_func/find-preview-src/find-preview-src"
import VideoPlayer from "./video-player"
import Thumbnail from "./video-thumbnail"

export default function Video({ data }) {
  Video.propTypes = {
    data: propTypes.objectOf(propTypes.string).isRequired,
  }
  const { url } = data
  const [visibility, setVisibility] = useState(false)
  function toggleVisibility() {
    setVisibility(!visibility)
  }
  const imgSrc = findPreview(url)
  if (visibility) {
    return (
      <VideoPlayer data={data} func={() => toggleVisibility()} src={imgSrc} />
    )
  }

  return <Thumbnail data={data} src={imgSrc} func={() => toggleVisibility()} />
}
