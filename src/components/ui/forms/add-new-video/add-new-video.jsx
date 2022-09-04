/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react"
import "../style.css"
import InputField from "../../input-field/input-field"
import Button from "../../button/button"

export default function VideoForm() {
  return (
    <div className="add-new-vid">
      <h1>Add New Video</h1>
      <form>
        <label>
          Youtube Link
          <InputField placeholder="Past link..." />
        </label>
        <label>
          Name of video
          <InputField placeholder="Type name..." />
        </label>
        <label>
          Description
          <InputField isBig placeholder="Type description..." />
        </label>
        <div className="form-buttons">
          <Button text="Cancel" secondary />
          <Button text="Submit" />
        </div>
      </form>
    </div>
  )
}
