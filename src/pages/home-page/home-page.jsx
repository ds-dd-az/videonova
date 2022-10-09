/* eslint-disable react/no-unescaped-entities */
import React from "react"
import Layout from "../../components/layout/layout"
import Button from "../../components/ui/button/button"
import StarImage from "./star-image.png"
import UserCard from "../../components/ui/user-card/user-card"
// eslint-disable-next-line import/order
import { useDispatch } from "react-redux"
import getUserData from "../../api/users"
import getVideos from "../../api/videos"
import { SelectUsers } from "../../modules/userdata"

const star = {
  src: StarImage,
  alt: "",
}
export default function HomePage() {
  const dispatch = useDispatch()
  async function dispatchVideos() {
    const videos = await getVideos()
    dispatch({
      type: "data/getVideos",
      payload: videos,
    })
  }
  let allUsers
  async function dispatchUsers() {
    const users = await getUserData()
    dispatch({
      type: "data/getUsers",
      payload: users,
    })
  }
  dispatchUsers()
  dispatchVideos()
  function signInForm() {
    dispatch({
      type: "form/show",
      payload: "signIn",
    })
  }
  return (
    <Layout>
      <div className="page-block">
        <div className="home-page">
          <div className="home-heading">
            <h1>Welcome to VideoNova</h1>
            Create videos with single click. Add subtitles, transcribe audio and
            more
            {/* eslint-disable-next-line react/jsx-no-bind */}
            <Button text="Start Now" click={signInForm} />
          </div>

          <div className="best-creators">
            <div className="best-creators__text">
              <h2>Best creators</h2>
              <img src={star.src} alt={star.alt} />
            </div>
            <div className="best-creators__users">
              <UserCard />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
