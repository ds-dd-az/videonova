import React from "react"
import { useSelector } from "react-redux"
import Header from "../ui/header/header"
import Footer from "../ui/footer/footer"
import Popup from "../ui/popup/popup"
import { selectAuthorised } from "../../modules/user/index"

// eslint-disable-next-line react/prop-types
export default function Layout({ children }) {
  const isAuthorised = useSelector(selectAuthorised)
  return (
    <>
      <Popup />
      <Header login={isAuthorised} />
      <main>{children}</main>
      <Footer />
    </>
  )
}
