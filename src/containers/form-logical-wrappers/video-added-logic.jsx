import React from "react"
import { useSelector } from "react-redux"
import Button from "../../components/ui/button/button"
import VideoAddedMessage from "../../components/ui/forms/add-new-video_added/video-added"
import { selectImg } from "../../modules/form"
import CloseFormButton from "../close-form-button/close-form-button"
import Form from "../../components/ui/forms/forms"

export default function VideoAddedMessageWithLogic() {
  const previewImage = useSelector(selectImg)

  return (
    <Form>
      <VideoAddedMessage
        img={previewImage}
        formCloser={
          <CloseFormButton>
            <Button text="To Video" />
          </CloseFormButton>
        }
      />
    </Form>
  )
}
