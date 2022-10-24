import React from "react"
import { useDispatch, useSelector } from "react-redux"
import Layout from "../../components/layout/layout"
import Video from "../../components/ui/video/video"
import UserIcon from "../../components/ui/user-icon/user-icon"
import Button from "../../components/ui/button/button"
import VidIcon from "./video-icon.png"
import { SelectVideos, SelectUsers } from "../../modules/userdata"

const vidIcon = {
  src: VidIcon,
  alt: "",
}

export default function UserPage() {
  const dispatch = useDispatch()
  const pageId = window.location.href.split("user/")[1]
  console.log(pageId)
  function showForm() {
    dispatch({
      type: "form/show",
      payload: "addVideo",
    })
  }
  const users = useSelector(SelectUsers)
  const owner = users.find((value) => value.id === pageId)
  const allVideos = useSelector(SelectVideos)
  const usersVideos = allVideos.filter((value) => value.userId === pageId)
  console.log(usersVideos)
  const renderVideos = usersVideos.map((element) => (
    <Video data={element} key={element.id} />
  ))

  return (
    <Layout>
      <div className="page-block">
        <div className="user">
          <UserIcon iconSrc={owner.userPic} size="big" />
          <h1>{owner.userName}</h1>
        </div>
        <div className="user-videos">
          <div className="user-videos__header">
            <div className="videos-text">
              <h2>{owner.userName}s videos</h2>
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
