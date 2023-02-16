import React from "react"
import TelegramIcon from "../../../assets/icons/social-icons/telegram-icon.svg"
import DiscordIcon from "../../../assets/icons/social-icons/discord-icon.svg"
import TwitterIcon from "../../../assets/icons/social-icons/twitter-icon.svg"

export default function Socials() {
  return (
    <div className="social-icons">
      <a href="https://web.telegram.org/z/">
        <img
          className="social-icons_icon"
          src={TelegramIcon}
          alt="our telegram"
        />
      </a>
      <a href="https://discord.com/">
        <img
          className="social-icons_icon"
          src={DiscordIcon}
          alt="our discord"
        />
      </a>
      <a href="https://twitter.com/?lang=uk">
        <img
          className="social-icons_icon"
          src={TwitterIcon}
          alt="our twitter"
        />
      </a>
    </div>
  )
}
