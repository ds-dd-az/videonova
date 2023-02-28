import React from "react"
import UserIcon from "./user-icon"

export default {
  title: "Components/ui/user-icon",
  component: UserIcon,
  argTypes: {
    size: {
      options: ["small", "big", "medium"],
      control: { type: "radio" },
    },
  },
}

function Template(args) {
  return (
    <div style={{ backgroundColor: "#ccc" }}>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <UserIcon {...args} />
    </div>
  )
}

export const Big = Template.bind({})

Big.args = {
  size: "big",
}

export const Small = Template.bind({})

Small.args = {
  size: "small",
}

export const Medium = Template.bind({})

Medium.args = {
  size: "medium",
}
