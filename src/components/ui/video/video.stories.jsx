import React from "react"
import Video from "./video"

export default {
  title: "video",
  component: Video,
  argTypes: {},
}

function Template(args) {
  return (
    <div style={{ backgroundColor: "#ccc" }}>
      <Video {...args} />
    </div>
  )
}

export const video = Template.bind({})
