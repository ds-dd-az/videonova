import React from "react"
import UserIcon from "./user-icon"

export default {
  title: "Components/ui/user-icon",
  component: UserIcon,
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
  iconSrc: "https://picsum.photos/200",
}

export const Small = Template.bind({})

Small.args = {
  size: "small",
  iconSrc: "https://picsum.photos/200",
}

export const Medium = Template.bind({})

Medium.args = {
  size: "medium",
  iconSrc: "https://picsum.photos/200",
}
