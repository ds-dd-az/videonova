import React from "react"
import { useDispatch, useSelector } from "react-redux"
import Button from "../../components/ui/button/button"
import VidIcon from "../../assets/icons/video-icon.png"
import Heading from "../../components/ui/headings/headings"
import { showAddVideoForm } from "../../external_func/dispatches/dispatches"
import { SelectUsers, SelectCurrentUserId } from "../../modules/userdata"

export default function VideoHeader() {
  const dispatch = useDispatch()
  const openForm = () => showAddVideoForm(dispatch)
  const pageId = window.location.href.split("user/")[1]
  const users = useSelector(SelectUsers)
  const owner = users.find((value) => value.id === pageId)
  const name =
    owner.userName.slice(-1) !== "s"
      ? `${owner.userName}\`s`
      : `${owner.userName}\``
  const currentUser = useSelector(SelectCurrentUserId)

  return (
    <div className="user-videos__header">
      <div className="user-videos__heading">
        <Heading size={2}>{name} videos</Heading>
        <img src={VidIcon} alt="" />
      </div>
      {currentUser === pageId ? (
        <Button text="Add video" click={openForm} />
      ) : null}
    </div>
  )
}
