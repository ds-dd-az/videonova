import React from "react"
import InputField from "./input-field"

export default {
  title: "input field",
  component: InputField,
  argTypes: {
    isBig: { boolean: { action: false } },
    hide: { boolean: { action: false } },
    placeholder: "text",
    withIcon: { boolean: { action: false } },
  },
}

function Template(args) {
  return (
    <div style={{ backgroundColor: "#ccc" }}>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <InputField {...args} />
    </div>
  )
}

export const Text = Template.bind({})

Text.args = {
  isBig: false,
  hide: false,
  placeholder: "text",
  withIcon: false,
}

export const Password = Template.bind({})

Password.args = {
  ...Text.args,
  hide: true,
}

export const Big = Template.bind({})

Big.args = {
  ...Text.args,
  isBig: true,
}

export const PasswordWithToggle = Template.bind({})

PasswordWithToggle.args = {
  ...Password.args,
  withIcon: true,
}
