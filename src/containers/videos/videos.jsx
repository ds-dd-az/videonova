import React from "react"
import { useSelector } from "react-redux"
import Video from "../../components/ui/video/video"
import { SelectVideos } from "../../modules/userdata"

export default function Videos() {
  const allVideos = useSelector(SelectVideos)
  const pageId = window.location.href.split("user/")[1]
  const usersVideos = allVideos.filter((value) => value.userId === pageId)
  let content = <h1>Nothing is here.... yet</h1>
  if (usersVideos.length > 0) {
    content = usersVideos.map((element) => (
      <Video data={element} key={element.id} />
    ))
  }
  return content
}
