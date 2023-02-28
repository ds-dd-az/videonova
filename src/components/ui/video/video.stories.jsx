import React from "react"
import Thumbnail from "./video-thumbnail"

export default {
  title: "Components/ui/video-thumbnail",
  component: Thumbnail,
  argTypes: {},
}

function Template(args) {
  return (
    <div style={{ backgroundColor: "#ccc" }}>
      <Thumbnail {...args} />
    </div>
  )
}

export const VideoThumbnail = Template.bind({})
