import React from "react"
import "./style.css"
import Logo from "../logo/logo"
import Socials from "../social/social"

export default function Footer() {
  return (
    <div className="footer">
      <Logo color="white" />
      All rights Reserved 2022
      <Socials />
    </div>
  )
}
