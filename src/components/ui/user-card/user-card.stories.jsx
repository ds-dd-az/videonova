import React from "react"
import UserCard from "./user-card"

export default {
  title: "Components/ui/User-card",
  component: UserCard,
}

function Template(args) {
  return (
    <div style={{ backgroundColor: "#ccc" }}>
      <UserCard {...args} />
    </div>
  )
}

export const Primary = Template.bind({})

Primary.args = {}
