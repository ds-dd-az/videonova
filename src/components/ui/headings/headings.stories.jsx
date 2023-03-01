import React from "react"
import Heading from "./headings"

export default {
  title: "Components/ui/Headings",
  component: Heading,
}

function Template(args) {
  return (
    <div style={{ backgroundColor: "#ccc" }}>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Heading {...args}>
        This is <span>Heading</span>
      </Heading>
    </div>
  )
}

export const H1 = Template.bind({})

H1.args = {
  size: 1,
}

export const H2 = Template.bind({})

H2.args = {
  size: 2,
}

export const H3 = Template.bind({})

H3.args = {
  size: 3,
}
