import React from "react"
import { SocialIcon } from "react-social-icons"

export default function Socials() {
  return (
    <div className="social-icons">
      <SocialIcon
        url="https://web.telegram.org/z/"
        bgColor="#232323"
        fgColor="white"
      />
      <SocialIcon
        url="https://discord.com/"
        bgColor="#232323"
        fgColor="white"
      />
      <SocialIcon
        url="https://twitter.com/?lang=uk"
        bgColor="#232323"
        fgColor="white"
      />
    </div>
  )
}
