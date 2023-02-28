import React from "react"
import { useDispatch, useSelector } from "react-redux"
import "../../styles/pages/home-page.css"
import Layout from "../../components/layout/layout"
import Button from "../../components/ui/button/button"
import StarImage from "../../assets/icons/star-image.png"
import { SelectLoading } from "../../modules/userdata/userdata.selectors"
import LoadRing from "../../components/ui/Loading-ring/load-ring"
import Users from "../../containers/Users/users"
import SortIcon from "../../components/ui/sort-icon/sort-icon"
import {
  showSignUpForm,
  reverseArr,
} from "../../external_func/dispatches/dispatches"
import Heading from "../../components/ui/headings/headings"

export default function HomePage() {
  const dispatch = useDispatch()
  const loading = useSelector(SelectLoading)
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
            Create videos with single click. Add subtitles, transcribe audio and
            more
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
              {loading ? <LoadRing isBig /> : <Users />}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
