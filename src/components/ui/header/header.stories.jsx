import React from "react"
import Header from "./header"

export default {
  title: "Header",
  component: Header,
  argTypes: {
    login: {
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
}

export const Unauthorised = Template.bind({})

Unauthorised.args = {
  login: false,
}
