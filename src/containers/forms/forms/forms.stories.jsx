import React from "react"
import Form from "./forms"
import SignIn from "./sign-in-form/sign-in-form"
import SignUp from "./sign-up-form/sign-up-form"
import XIcon from "./x-icon/x-icon"
import VideoForm from "./add-new-video/add-new-video"
import VideoAddedMessage from "./add-new-video_added/video-added"
import Button from "../../../components/ui/button/button"

export default {
  title: "Components/ui/form",
  component: Form,
}

function Template(args) {
  return (
    <div style={{ backgroundColor: "#ccc" }}>
      <Form {...args} />
    </div>
  )
}

export const SignInForm = Template.bind({})

SignInForm.args = {
  children: (
    <>
      <XIcon />
      <SignIn
        formSwitcher={
          <span>
            Don`t have account? <span style={{ color: "blue" }}>Sign Up</span>
          </span>
        }
      />
    </>
  ),
}

export const SignUpForm = Template.bind({})

SignUpForm.args = {
  children: (
    <>
      <XIcon />
      <SignUp
        formSwitcher={
          <span>
            Already have an account?{" "}
            <span style={{ color: "blue" }}>Sign In</span>
          </span>
        }
      />
    </>
  ),
}

export const AddVideoForm = Template.bind({})

AddVideoForm.args = {
  children: <VideoForm formCloser={<Button text="Cancel" secondary />} />,
}

export const VideoAdded = Template.bind({})

VideoAdded.args = {
  children: <VideoAddedMessage img="https://picsum.photos/400/200" />,
}
