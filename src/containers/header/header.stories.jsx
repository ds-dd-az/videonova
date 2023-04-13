import React from "react"
import Header from "./header"

export default {
  title: "Components/ui/Header",
  component: Header,
  argTypes: {
    user: "object",
    login: {
      options: [true, false],
      control: { type: "radio" },
    },
    signOutEnabled: {
      options: [true, false],
      control: { type: "radio" },
    },
  },
}

function Template(args) {
  return (
    <div style={{ backgroundColor: "#ccc" }}>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Header {...args} />
    </div>
  )
}

export const Authorised = Template.bind({})

Authorised.args = {
  login: true,
  signOutEnabled: false,
  user: { userPic: "https://picsum.photos/200", userName: "User Name" },
}

export const Unauthorised = Template.bind({})

Unauthorised.args = {
  login: false,
  signOutEnabled: false,
}

export const UserPageAuthorised = Template.bind({})

UserPageAuthorised.args = {
  login: true,
  signOutEnabled: true,
}
