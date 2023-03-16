import React, { useState } from "react"
import propTypes from "prop-types"
import findPreview from "../../external_func/find-preview-src/find-preview-src"
import VideoPlayer from "../../components/ui/video/video-player"
import Thumbnail from "../../components/ui/video/video-thumbnail"

/**
 * Video component logical wrapper
 * @param data - object of strings, all the info about displayed video
 * @returns node, thumbnail with visibility toggling function, after toggling visibility to true returns videoplayer with darkened background
 */
export default function Video({ data }) {
  Video.propTypes = {
    /**
     * all the info about displayed video
     */
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
