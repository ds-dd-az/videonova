import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import Form from "../../components/ui/forms/forms"
import addNewVideo from "../../external_func/add-video/add-video"
import VideoForm from "../../components/ui/forms/add-new-video/add-new-video"

export default function AddVideoWrapper() {
  const dispatch = useDispatch()
  let linkField
  let nameField
  let descField
  useEffect(() => {
    linkField = document.getElementById("videoLink")
    nameField = document.getElementById("videoName")
    descField = document.getElementById("videoDesc")
  })
  function addVideo() {
    return addNewVideo(
      dispatch,
      linkField.value,
      nameField.value,
      descField.value
    )
  }
  return (
    <Form>
      <VideoForm submitFunc={() => addVideo} />
    </Form>
  )
}
