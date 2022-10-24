import React from "react"
import { useDispatch, useSelector } from "react-redux"
import Layout from "../../components/layout/layout"
import Video from "../../components/ui/video/video"
import UserIcon from "../../components/ui/user-icon/user-icon"
import Button from "../../components/ui/button/button"
import VidIcon from "./video-icon.png"
import { selectUserName } from "../../modules/user"
import { selectVideos } from "../../modules/userdata"

const vidIcon = {
  src: VidIcon,
  alt: "",
}

export default function UserPage() {
  const userName = useSelector(selectUserName)
  const dispatch = useDispatch()
  function showForm() {
    dispatch({
      type: "form/show",
      payload: "addVideo",
    })
  }
  const videos = useSelector(selectVideos)
  const renderVideos = videos.map((element) => (
    <Video data={element} key={element.id} />
  ))
  return (
    <Layout>
      <div className="page-block">
        <div className="user">
          <UserIcon size="big" />
          <h1>{userName}</h1>
        </div>
        <div className="user-videos">
          <div className="user-videos__header">
            <div className="videos-text">
              <h2>{userName}s videos</h2>
              <img src={vidIcon.src} alt={vidIcon.alt} />
            </div>
            {/* eslint-disable-next-line react/jsx-no-bind */}
            <Button text="Add video" click={showForm} />
          </div>
          <div className="videos">{renderVideos}</div>
        </div>
      </div>
    </Layout>
  )
}
