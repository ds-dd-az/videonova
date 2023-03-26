import React from "react"
import propTypes from "prop-types"
import { useSelector } from "react-redux"
import Footer from "../../components/ui/footer/footer"
import PopupWithLogic from "../popup-logical-cont/popup-logic"
import AdaptiveHeader from "../header/header-container"
import {
  SelectUserLoading,
  SelectVideoLoading,
} from "../../modules/userdata/userdata.selectors"
import LoadRing from "../../components/ui/Loading-ring/load-ring"

/**
 * layout component
 * @param children - node, components wrapped by this layout component
 * @returns node, children wrapped by header and hiden by default popup component which displays forms
 */

export default function Layout({ children }) {
  Layout.propTypes = {
    children: propTypes.node.isRequired,
  }
  const usersLoading = useSelector(SelectUserLoading)
  const videosLoading = useSelector(SelectVideoLoading)
  const loading = usersLoading || videosLoading
  return loading ? (
    <LoadRing isBig className="ring_centered" />
  ) : (
    <>
      <PopupWithLogic />
      <AdaptiveHeader />
      <main>{children}</main>
      <Footer />
    </>
  )
}
