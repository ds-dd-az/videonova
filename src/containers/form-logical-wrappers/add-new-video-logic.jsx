import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Form from "../../components/ui/forms/forms"
import addNewVideo from "../../external_func/add-video/add-video"
import VideoForm from "../../components/ui/forms/add-new-video/add-new-video"
import { SelectErrorMessage } from "../../modules/current_error"
import CloseFormButton from "../close-form-button/close-form-button"
import Button from "../../components/ui/button/button"

/**
 * Logical wrapper for addVideo form
 *
 * used for passing props to the form
 * @returns node, addVideo form with enabled functionality
 */
export default function AddVideoWithLogic() {
  const dispatch = useDispatch()
  const errorMessage = useSelector(SelectErrorMessage)
  let linkField
  let nameField
  let descField
  useEffect(() => {
    linkField = document.getElementById("videoLink")
    nameField = document.getElementById("videoName")
    descField = document.getElementById("videoDesc")
  })
  const addVideo = () =>
    addNewVideo(dispatch, linkField.value, nameField.value, descField.value)
  return (
    <Form>
      <VideoForm
        submitFunc={addVideo}
        errorMessage={errorMessage}
        formCloser={
          <CloseFormButton>
            <Button text="Cancel" secondary />
          </CloseFormButton>
        }
      />
    </Form>
  )
}
