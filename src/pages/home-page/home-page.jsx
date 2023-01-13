/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/no-unescaped-entities */
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import Layout from "../../components/layout/layout"
import Button from "../../components/ui/button/button"
import StarImage from "./star-image.png"
import UserCard from "../../components/ui/user-card/user-card"
import { SelectUsers, SelectVideos } from "../../modules/userdata"
import { SelectLoading } from "../../modules/userdata/userdata.selectors"
import LoadRing from "../../components/ui/Loading-ring/load-ring"

const star = {
  src: StarImage,
  alt: "",
}
export default function HomePage() {
  const dispatch = useDispatch()
  function signInForm() {
    dispatch({
      type: "form/show",
      payload: "signIn",
    })
  }
  const users = useSelector(SelectUsers)
  const videos = useSelector(SelectVideos)
  const loading = useSelector(SelectLoading)
  const renderUsers = users.map((element) => {
    const countVideos = videos.filter((value) => value.userId === element.id)
    return (
      <UserCard
        vidAmount={countVideos.length}
        data={element}
        key={element.id}
      />
    )
  })
  return (
    <Layout>
      <div className="page-block">
        <div className="home-page">
          <div className="home-heading">
            <h1>Welcome to VideoNova</h1>
            Create videos with single click. Add subtitles, transcribe audio and
            more
            <Button text="Start Now" click={signInForm} />
          </div>
          <div className="best-creators">
            <div className="best-creators__text">
              <h2>Best creators</h2>
              <img src={star.src} alt={star.alt} />
            </div>
            <div className="best-creators__users">
              {loading ? <LoadRing isBig /> : renderUsers}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
