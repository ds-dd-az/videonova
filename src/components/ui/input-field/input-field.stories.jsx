import React from "react"
import InputField from "./input-field"

export default {
  title: "Components/ui/input field",
  component: InputField,
  argTypes: {
    placeholder: String,
    id: String,
    error: { options: [true, false], control: "boolean" },
    variant: String,
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
  placeholder: "enter text",
  id: "id",
  error: false,
  variant: "smallText",
}

export const Password = Template.bind({})

Password.args = {
  ...Text.args,
  variant: "password",
}

export const Big = Template.bind({})

Big.args = {
  ...Text.args,
  variant: "bigText",
}
