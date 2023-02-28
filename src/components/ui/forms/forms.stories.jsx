import React from "react"
import Form from "./forms"

export default {
  title: "Components/ui/form",
  component: Form,
  argTypes: {
    signIn: { boolean: { action: false } },
    signUp: { boolean: { action: false } },
    addVideo: { boolean: { action: false } },
    videoLoading: { boolean: { action: false } },
  },
}

function Template(args) {
  return (
    <div style={{ backgroundColor: "#ccc" }}>
      <Form {...args} />
    </div>
  )
}

export const SignIn = Template.bind({})

SignIn.args = {
  signIn: true,
  signUp: false,
  addVideo: false,
  videoLoading: false,
}

export const SignUp = Template.bind({})

SignUp.args = {
  ...SignIn.args,
  signIn: false,
  signUp: true,
}

export const AddVideo = Template.bind({})

AddVideo.args = {
  ...SignIn.args,
  signIn: false,
  addVideo: true,
}

export const VideoLoading = Template.bind({})

VideoLoading.args = {
  ...SignIn.args,
  signIn: false,
  videoLoading: true,
}
