import React from "react"
import propTypes from "prop-types"
import Header from "../ui/header/header"
import Footer from "../ui/footer/footer"
import Popup from "../ui/popup/popup"

export default function Layout({ children }) {
  Layout.propTypes = {
    children: propTypes.node.isRequired,
  }
  return (
    <>
      <Popup />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
