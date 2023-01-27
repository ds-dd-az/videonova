/* eslint-disable react/jsx-no-bind */
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import Layout from "../../components/layout/layout"
import Button from "../../components/ui/button/button"
import StarImage from "./star-image.png"
import { SelectLoading } from "../../modules/userdata/userdata.selectors"
import LoadRing from "../../components/ui/Loading-ring/load-ring"
import Users from "../../containers/Users/users"
import { selectReversed } from "../../modules/sorting"

const star = {
  src: StarImage,
  alt: "",
}

export default function HomePage() {
  const dispatch = useDispatch()
  const reversed = useSelector(selectReversed)
  function signInForm() {
    dispatch({
      type: "form/show",
      payload: { type: "signIn" },
    })
  }
  function reverseArr() {
    dispatch({
      type: "sorting/reverse",
    })
    console.log(reversed)
  }
  const loading = useSelector(SelectLoading)
  return (
    <Layout>
      <div className="page-block">
        <div className="home-page">
          <div className="home-heading">
            <h1>Welcome to VideoNova</h1>
            Create videos with single click. Add subtitles, transcribe audio and
            more
            <Button text="Start Now" click={signInForm} />
            <Button text="reverse" click={reverseArr} />
          </div>
          <div className="best-creators">
            <div className="best-creators__text">
              <h2>Best creators</h2>
              <img src={star.src} alt={star.alt} />
            </div>
            <div className="best-creators__users">
              {loading ? <LoadRing isBig /> : <Users />}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
