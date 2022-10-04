/* eslint-disable jsx-a11y/label-has-associated-control,react/jsx-no-bind,react-hooks/exhaustive-deps */
import React, { useEffect, useId } from "react"
import { useDispatch } from "react-redux"
import "../style.css"
import InputField from "../../input-field/input-field"
import Button from "../../button/button"

export default function VideoForm() {
  const dispatch = useDispatch()
  function closeForm() {
    dispatch({
      type: "form/hide",
    })
  }
  const link = useId()
  const videoName = useId()
  const videoDesc = useId()
  let linkField
  let nameField
  let descField
  useEffect(() => {
    linkField = document.getElementById(`${link}`)
    nameField = document.getElementById(`${videoName}`)
    descField = document.getElementById(`${videoDesc}`)
  })
  function addVideo() {
    console.log(
      `video added, link:${linkField.value}, name:${nameField.value}, description:${descField.value}`
    )
    closeForm()
  }
  return (
    <div className="add-new-vid">
      <h1>Add New Video</h1>
      <form>
        <label htmlFor={link}>
          Youtube Link
          <InputField id={link} placeholder="Past link..." />
        </label>
        <label htmlFor={videoName}>
          Name of video
          <InputField id={videoName} placeholder="Type name..." />
        </label>
        <label htmlFor={videoDesc}>
          Description
          <InputField id={videoDesc} isBig placeholder="Type description..." />
        </label>
        <div className="form-buttons">
          <Button text="Cancel" secondary click={closeForm} />
          <Button text="Submit" click={addVideo} />
        </div>
      </form>
    </div>
  )
}
