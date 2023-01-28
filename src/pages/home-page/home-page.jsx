import React from "react"
import { useDispatch, useSelector } from "react-redux"
import Layout from "../../components/layout/layout"
import Button from "../../components/ui/button/button"
import StarImage from "./star-image.png"
import { SelectLoading } from "../../modules/userdata/userdata.selectors"
import LoadRing from "../../components/ui/Loading-ring/load-ring"
import Users from "../../containers/Users/users"
import SortIcon from "../../components/ui/sort-icon/sort-icon"
import {
  signInForm,
  reverseArr,
} from "../../external_func/dispatches/dispatches"

export default function HomePage() {
  const dispatch = useDispatch()
  const loading = useSelector(SelectLoading)
  const reverse = () => reverseArr(dispatch)
  const openSignIn = () => signInForm(dispatch)
  return (
    <Layout>
      <div className="page-block">
        <div className="home-page">
          <div className="home-heading">
            <h1>Welcome to VideoNova</h1>
            Create videos with single click. Add subtitles, transcribe audio and
            more
            <Button text="Start Now" click={openSignIn} />
          </div>
          <div className="best-creators">
            <div className="best-creators__header">
              <div className="best-creators__text">
                <h2>Best creators</h2>
                <img src={StarImage} alt=" " />
              </div>
              <SortIcon click={reverse} />
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
