import React from "react"
import { useSelector } from "react-redux"
import Button from "../../components/ui/button/button"
import VideoAddedMessage from "./forms/add-new-video_added/video-added"
import { selectImg } from "../../modules/form"
import CloseFormButton from "../close-form-button/close-form-button"
import Form from "./forms/forms"

/**
 * Logical wrapper for "video added" message
 *
 * reads state passes preview image to the message also contains form closing button
 * @returns node, "video added" message with enabled functionality
 */
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
