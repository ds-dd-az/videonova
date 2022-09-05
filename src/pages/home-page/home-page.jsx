import React from "react"
import Layout from "../../components/layout/layout"
import Button from "../../components/ui/button/button"
import StarImage from "./star-image.png"
import UserCard from "../../components/ui/user-card/user-card"
import "./style.css"
// eslint-disable-next-line import/order
import { useDispatch } from "react-redux"

const star = {
  src: StarImage,
  alt: "",
}

export default function HomePage() {
  const dispatch = useDispatch()
  function login() {
    dispatch({
      type: "user/authorise",
      payload: {
        userName: "very registered user",
        userId: 3,
      },
    })
  }
  return (
    <Layout>
      <div className="home-page">
        <div className="home-heading">
          <h1>Welcome to VideoNova</h1>
          Create videos with single click. Add subtitles, transcribe audio and
          more
        </div>
        {/* eslint-disable-next-line react/jsx-no-bind */}
        <Button text="Start Now" click={login} />
        <div className="best-creators">
          <div className="best-creators__text">
            <h2>Best creators</h2>
            <img src={star.src} alt={star.alt} />
          </div>
          <div className="best-creators__users">
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
          </div>
        </div>
      </div>
    </Layout>
  )
}
