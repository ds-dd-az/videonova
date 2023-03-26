import React from "react"
import "../../styles/pages/user-page.css"
import Layout from "../../containers/layout/layout"
import Videos from "../../containers/videos/videos"
import UserPageHeading from "../../containers/user-page-heading/user-page-heading"
import VideoHeader from "../../containers/user-page-videos-heading/user-page-videos-header"

export default function UserPage() {
  const pageId = window.location.href.split("user/")[1]
  return (
    <Layout>
      <div className="page-block">
        <UserPageHeading />
        <div className="user-videos">
          <VideoHeader />
          <div className="videos">
            <Videos pageId={pageId} />
          </div>
        </div>
      </div>
    </Layout>
  )
}
