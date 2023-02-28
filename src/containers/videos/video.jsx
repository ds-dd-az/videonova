import React, { useState } from "react"
import propTypes from "prop-types"
import findPreview from "../../external_func/find-preview-src/find-preview-src"
import VideoPlayer from "../../components/ui/video/video-player"
import Thumbnail from "../../components/ui/video/video-thumbnail"

export default function Video({ data }) {
  Video.propTypes = {
    data: propTypes.objectOf(propTypes.string).isRequired,
  }
  const { url } = data
  const [isVisible, setVisibility] = useState(false)
  function toggleVisibility() {
    setVisibility(!isVisible)
  }
  const imgSrc = findPreview(url)
  if (isVisible) {
    return (
      <VideoPlayer
        data={data}
        closingFunc={() => toggleVisibility()}
        src={imgSrc}
      />
    )
  }

  return <Thumbnail data={data} src={imgSrc} func={() => toggleVisibility()} />
}
