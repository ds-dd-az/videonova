import React from "react"
import TelegramIcon from "../../../../assets/icons/social-icons/telegram-icon.svg"
import GitHubIcon from "../../../../assets/icons/social-icons/github-mark-white.png"
import LinkedInIcon from "../../../../assets/icons/social-icons/linkedin-logo.png"

/**
 * Social icons group component
 * @returns node, group of social network`s icons with hyperlinks
 */
export default function Socials() {
  return (
    <div className="social-icons">
      <a href="https://t.me/dsdyaz">
        <img
          className="social-icons__icon"
          src={TelegramIcon}
          alt="my telegram"
        />
      </a>
      <a href="https://github.com/dsdyaz">
        <img
          className="social-icons__icon"
          src={GitHubIcon}
          alt="github page"
        />
      </a>
      <a href="https://www.linkedin.com/in/daria-semeniyk-a50619262">
        <img
          className="social-icons__icon"
          src={LinkedInIcon}
          alt="my linkedIn"
        />
      </a>
    </div>
  )
}
