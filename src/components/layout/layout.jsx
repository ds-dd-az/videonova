import React from "react"
import propTypes from "prop-types"
import Footer from "../ui/footer/footer"
import Popup from "../ui/popup/popup"
import AdaptiveHeader from "../../containers/header/header-container"

/**
 * layout component
 * @param children - node, components wrapped by this layout component
 * @returns node, children wrapped by header and hiden by default popup component which displays forms
 */

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
