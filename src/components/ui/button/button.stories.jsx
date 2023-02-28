import React from "react"
import Button from "./button"

export default {
  title: "button",
  component: Button,
  argTypes: {
    text: "button",
    disabled: { boolean: { action: false } },
    secondary: { boolean: { action: false } },
    loading: { boolean: { action: false } },
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
  loading: false,
}

export const Disabled = Template.bind({})

Disabled.args = {
  ...Primary.args,
  text: "Disabled button",
  disabled: true,
}

export const Secondary = Template.bind({})

Secondary.args = {
  ...Primary.args,
  text: "Secondary button",
  secondary: true,
}

export const Loading = Template.bind({})

Loading.args = {
  ...Primary.args,
  loading: true,
}
