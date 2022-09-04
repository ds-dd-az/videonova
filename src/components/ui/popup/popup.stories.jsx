import React from "react"
import Popup from "./popup"

export default {
  name: "Popup",
  component: Popup,
  argTypes: {},
}

function Template(args) {
  return (
    <div
      style={{
        backgroundColor: "#ccc",
        width: "100%",
        height: "1000px",
      }}
    >
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Popup {...args} />
    </div>
  )
}

export const PopUp = Template.bind({})
