import React from "react"
import Footer from "./footer"

export default {
  title: "Components/ui/footer",
  component: Footer,
  argTypes: {},
}

function Template(args) {
  return (
    <div style={{ backgroundColor: "#ccc" }}>
      <Footer {...args} />
    </div>
  )
}

export const footer = Template.bind({})
