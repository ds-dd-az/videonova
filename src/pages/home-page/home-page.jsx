import React from "react"
import Layout from "../../components/layout/layout"
import Button from "../../components/ui/button/button"
import StarImage from "./star-image.png"
import UserCard from "../../components/ui/user-card/user-card"
import "./style.css"

const star = {
  src: StarImage,
  alt: "",
}

export default function HomePage() {
  return (
    <Layout>
      <div className="home-page">
        <div className="home-heading">
          <h1>Welcome to VideoNova</h1>
          Create videos with single click. Add subtitles, transcribe audio and
          more
        </div>
        <Button text="Start Now" />
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
