import React from "react"
import { useDispatch, useSelector } from "react-redux"
import "../../styles/pages/user-page.css"
import Layout from "../../components/layout/layout"
import UserIcon from "../../components/ui/user-icon/user-icon"
import Button from "../../components/ui/button/button"
import VidIcon from "../../assets/icons/video-icon.png"
import {
  SelectUsers,
  SelectLoading,
  SelectCurrentUserId,
} from "../../modules/userdata"
import LoadRing from "../../components/ui/Loading-ring/load-ring"
import { addVideoForm } from "../../external_func/dispatches/dispatches"
import Videos from "../../containers/videos/videos"
import Heading from "../../components/ui/headings/headings"

export default function UserPage() {
  const dispatch = useDispatch()
  const openForm = () => addVideoForm(dispatch)
  const pageId = window.location.href.split("user/")[1]
  const users = useSelector(SelectUsers)
  const currentUser = useSelector(SelectCurrentUserId)
  const owner = users.find((value) => value.id === pageId)
  const loading = useSelector(SelectLoading)
  const name =
    owner.userName.slice(-1) !== "s"
      ? `${owner.userName}\`s`
      : `${owner.userName}\``
  return (
    <Layout>
      <div className="page-block">
        <div className="user">
          <UserIcon iconSrc={owner.userPic} size="big" />
          <Heading size={1}>{owner.userName} </Heading>
        </div>
        <div className="user-videos">
          <div className="user-videos__header">
            <div className="videos-text">
              <Heading size={2}>{name} videos</Heading>
              <img src={VidIcon} alt="" />
            </div>
            {currentUser === pageId ? (
              <Button text="Add video" click={openForm} />
            ) : null}
          </div>
          <div className="videos">
            {loading ? <LoadRing isBig /> : <Videos pageId={pageId} />}
          </div>
        </div>
      </div>
    </Layout>
  )
}
