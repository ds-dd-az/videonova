import React from "react"
import "./style.css"
import Logo from "../logo/logo"
import Socials from "../socials/socials"

export default function Footer() {
  return (
    <div className="footer">
      <Logo color="white" />
      <div className="footer_text">All rights Reserved 2022</div>
      <Socials />
    </div>
  )
}
