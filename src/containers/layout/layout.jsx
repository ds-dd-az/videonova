import React, { lazy } from "react"
import propTypes from "prop-types"
import { useSelector } from "react-redux"
import AdaptiveHeader from "../header/header-container"
import {
  SelectUserLoading,
  SelectVideoLoading,
} from "../../modules/userdata/userdata.selectors"
import LoadRing from "../../components/ui/Loading-ring/load-ring"

const PopupWithLogic = lazy(() => import("../popup-logical-cont/popup-logic"))
const Footer = lazy(() => import("../../components/ui/footer/footer"))
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
