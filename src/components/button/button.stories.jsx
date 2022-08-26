import React from "react"
import Button from "./index"

export default {
  title: "button",
  component: Button,
  argTypes: {
    text: "button",
    disabled: { boolean: { action: false } },
    secondary: { boolean: { action: false } },
  },
}

function Template(args) {
  return (
    <div style={{ backgroundColor: "#ccc" }}>
      <Button {...args} />
    </div>
  )
}

export const Primary = Template.bind({})

Primary.args = {
  text: "Primary button",
  disabled: false,
  secondary: false,
}

export const Disabled = Template.bind({})

Disabled.args = {
  ...Primary.args,
  disabled: true,
}

export const Secondary = Template.bind({})

Secondary.args = {
  ...Primary.args,
  secondary: true,
}
