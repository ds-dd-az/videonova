import React from "react"
import TelegramIcon from "../../../assets/social-icons/telegram-icon.svg"
import DiscordIcon from "../../../assets/social-icons/discord-icon.svg"
import TwitterIcon from "../../../assets/social-icons/twitter-icon.svg"
import "./style.css"

export default function Socials() {
  const telegramIcon = {
    src: TelegramIcon,
    alt: "Telegram social logo",
  }
  const discordIcon = {
    src: DiscordIcon,
    alt: "Discord social logo",
  }
  const twitterIcon = {
    src: TwitterIcon,
    alt: "Twitter social logo",
  }
  return (
    <div className="social-icons">
      <a href="https://web.telegram.org/z/">
        <img
          className="social-icons_icon"
          src={telegramIcon.src}
          alt={telegramIcon.alt}
        />
      </a>
      <a href="https://discord.com/">
        <img
          className="social-icons_icon"
          src={discordIcon.src}
          alt={discordIcon.alt}
        />
      </a>
      <a href="https://twitter.com/?lang=uk">
        <img
          className="social-icons_icon"
          src={twitterIcon.src}
          alt={twitterIcon.alt}
        />
      </a>
    </div>
  )
}
