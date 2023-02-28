import { number } from "prop-types"
import React from "react"
import UserCard from "./user-card"

export default {
  title: "Components/ui/User-card",
  component: UserCard,
  argTypes: {
    vidAmount: number,
    likeAmount: number,
  },
}

function Template(args) {
  return (
    <div style={{ backgroundColor: "#ccc", width: "302px" }}>
      <UserCard {...args} />
    </div>
  )
}

export const Card = Template.bind({})

Card.args = { vidAmount: 100, likeAmount: 100 }
