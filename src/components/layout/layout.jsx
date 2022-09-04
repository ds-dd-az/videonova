import React from "react"
import Header from "../ui/header/header"
import Footer from "../ui/footer/footer"

// eslint-disable-next-line react/prop-types
export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
