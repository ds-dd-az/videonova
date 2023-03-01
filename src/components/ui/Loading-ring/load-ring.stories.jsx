import React from "react"
import LoadRing from "./load-ring"

export default {
  title: "Components/ui/LoadingRing",
  component: LoadRing,
}

function Template(args) {
  return (
    <div style={{ backgroundColor: "#ccc" }}>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <LoadRing {...args} />
    </div>
  )
}

export const Big = Template.bind({})

Big.args = {
  isBig: true,
}

export const Small = Template.bind({})

Small.args = {
  isBig: false,
}
