import React, { useEffect, useId } from "react"
import { useDispatch } from "react-redux"
import InputField from "../../input-field/input-field"
import Button from "../../button/button"
import addNewVideo from "../../../../external_func/add-video/add-video"
import FormError from "../../../../containers/error-message-cont/form-error"
import CloseForm from "../../../../containers/close-form-button/close-form-button"
import Heading from "../../headings/headings"

export default function VideoForm() {
  const dispatch = useDispatch()
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
  const addVideo = () => {
    addNewVideo(dispatch, linkField.value, nameField.value, descField.value)
  }
  return (
    <div className="add-new-vid">
      <Heading size={1}>
        Add <span>New</span> Video
      </Heading>
      <FormError />
      <form>
        <label htmlFor={link}>
          <Heading size={3}>Youtube Link</Heading>
          <InputField
            variant="smallText"
            id={link}
            placeholder="Past link..."
          />
        </label>
        <label htmlFor={videoName}>
          <Heading size={3}>Name of video</Heading>
          <InputField
            variant="smallText"
            id={videoName}
            placeholder="Type name..."
          />
        </label>
        <label htmlFor={videoDesc}>
          <Heading size={3}>Description</Heading>
          <InputField
            id={videoDesc}
            variant="bigText"
            placeholder="Type description..."
          />
        </label>
        <div className="form-buttons">
          <CloseForm>
            <Button text="Cancel" secondary />
          </CloseForm>
          <Button text="Submit" click={addVideo} />
        </div>
      </form>
    </div>
  )
}
