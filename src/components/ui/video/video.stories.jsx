import React from "react"
import Thumbnail from "./video-thumbnail"
import "../../../styles/video/video.css"

export default {
  title: "Components/ui/video-thumbnail",
  component: Thumbnail,
  argTypes: {},
}

function Template(args) {
  return (
    <div style={{ backgroundColor: "white" }}>
      <div className="video-component">
        <Thumbnail {...args} />
      </div>
    </div>
  )
}

export const VideoThumbnail = Template.bind({})

VideoThumbnail.args = {
  data: {
    title: "Great video",
    description: "This video is great indeed, must watch for everyone",
  },
}
