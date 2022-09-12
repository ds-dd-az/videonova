import React from "react"
import { useDispatch, useSelector } from "react-redux"
import Layout from "../../components/layout/layout"
import Video from "../../components/ui/video/video"
import UserIcon from "../../components/ui/user-icon/user-icon"
import Button from "../../components/ui/button/button"
import VidIcon from "./video-icon.png"

const vidIcon = {
  src: VidIcon,
  alt: "",
}

export default function UserPage() {
  const dispatch = useDispatch()
  function showForm() {
    dispatch({
      type: "form/show",
      payload: "addVideo",
    })
  }
  return (
    <Layout>
      <div className="page-block">
        <div className="user">
          <UserIcon size="big" />
          <h1>User Name</h1>
        </div>
        <div className="user-videos">
          <div className="user-videos__header">
            <div className="videos-text">
              <h2>users videos</h2>
              <img src={vidIcon.src} alt={vidIcon.alt} />
            </div>
            {/* eslint-disable-next-line react/jsx-no-bind */}
            <Button text="Add video" click={showForm} />
          </div>
          <div className="videos">
            <Video videoUrl="https://www.youtube.com/watch?v=F0DbezQV8Gk" />
            <Video videoUrl="https://www.youtube.com/watch?v=087gJdYkYF0" />
            <Video videoUrl="https://www.youtube.com/watch?v=087gJdYkYF0" />
            <Video videoUrl="https://www.youtube.com/watch?v=BsJCT4UGpwo" />
            <Video videoUrl="https://www.youtube.com/watch?v=F0DbezQV8Gk" />
            <Video videoUrl="https://www.youtube.com/watch?v=087gJdYkYF0" />
            <Video videoUrl="https://www.youtube.com/watch?v=087gJdYkYF0" />
            <Video videoUrl="https://www.youtube.com/watch?v=BsJCT4UGpwo" />
          </div>
        </div>
      </div>
    </Layout>
  )
}
