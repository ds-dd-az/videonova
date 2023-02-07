import React from "react"
import propTypes from "prop-types"
import Footer from "../ui/footer/footer"
import Popup from "../ui/popup/popup"
import AdaptiveHeader from "../../containers/header/header-container"

export default function Layout({ children }) {
  Layout.propTypes = {
    children: propTypes.node.isRequired,
  }
  return (
    <>
      <Popup />
      <AdaptiveHeader />
      <main>{children}</main>
      <Footer />
    </>
  )
}
