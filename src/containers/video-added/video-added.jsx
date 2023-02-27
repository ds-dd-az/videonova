import React from "react"
import { useSelector } from "react-redux"
import { selectImg } from "../../modules/form"
import VideoAddedMessage from "../../components/ui/forms/add-new-video_added/video-added"
import findPreview from "../../external_func/find-preview-src/find-preview-src"

export default function VideoAddedContainer() {
  const url = useSelector(selectImg)
  const img = findPreview(url)
  return <VideoAddedMessage img={img} />
}
