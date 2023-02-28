import React from "react"
import ErrorMessage from "./error-message"

export default {
  tittle: "Components/ui/error message",
  component: ErrorMessage,
  argTypes: {
    message: "There is an error somehwere",
  },
}

function Template(args) {
  return (
    <div style={{ backgroundColor: "#ccc" }}>
      <ErrorMessage {...args} />
    </div>
  )
}

export const Message = Template.bind({})

Message.args = {
  message: "There is an error somehwere",
}
