import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Form from "../../components/ui/forms/forms"
import addNewVideo from "../../external_func/add-video/add-video"
import VideoForm from "../../components/ui/forms/add-new-video/add-new-video"
import { selectType } from "../../modules/form"

export default function FormHandler() {
  const dispatch = useDispatch()
  const formType = useSelector(selectType)
  console.log(formType)
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
  if (formType === "addVideo") {
    return (
      <Form>
        <VideoForm submitFunc={() => addVideo} />
      </Form>
    )
  }
}
