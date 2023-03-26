import React from "react"
import { useDispatch } from "react-redux"
import "../../styles/pages/home-page.css"
import Layout from "../../containers/layout/layout"
import Button from "../../components/ui/button/button"
import StarImage from "../../assets/icons/star-image.png"
import Users from "../../containers/Users/users"
import SortIcon from "../../components/ui/sort-icon/sort-icon"
import {
  showSignUpForm,
  reverseArr,
} from "../../external_func/dispatches/dispatches"
import Heading from "../../components/ui/headings/headings"
import ScrollToTopButton from "../../containers/scroll-to-top-button/scroll-button"

export default function HomePage() {
  const dispatch = useDispatch()
  const reverseSorted = () => reverseArr(dispatch)
  const openSignUp = () => showSignUpForm(dispatch)
  return (
    <Layout>
      <div className="page-block">
        <div className="home-page">
          <div className="home-heading">
            <Heading size={1}>
              Welcome to <span>Videonova</span>
            </Heading>
            <span className="home-heading__desc">
              Create videos with single click. Add subtitles, transcribe audio
              and more
            </span>
            <Button text="Start Now" click={openSignUp} />
          </div>
          <div className="best-creators">
            <div className="best-creators__header">
              <div className="best-creators__heading">
                <Heading size={2}>Best Creators</Heading>
                <img src={StarImage} alt=" " />
              </div>
              <SortIcon clickFunc={reverseSorted} />
            </div>
            <div className="best-creators__users">
              <Users />
            </div>
            <ScrollToTopButton />
          </div>
        </div>
      </div>
    </Layout>
  )
}
