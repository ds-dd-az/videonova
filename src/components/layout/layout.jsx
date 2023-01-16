import React from "react"
import { useSelector } from "react-redux"
import Header from "../ui/header/header"
import Footer from "../ui/footer/footer"
import Popup from "../ui/popup/popup"

// eslint-disable-next-line react/prop-types
export default function Layout({ children }) {
  return (
    <>
      <Popup />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
