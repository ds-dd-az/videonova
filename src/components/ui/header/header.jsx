import React from "react"
import "./style.css"
import propTypes from "prop-types"
import Logo from "../logo/logo"
import UserIcon from "../user-icon/user-icon"
import Button from "../button/button"

export default function Header(props) {
  const { login } = props

  Header.propTypes = {
    /**
     * variation of header based on authorisation
     */
    login: propTypes.bool,
  }
  Header.defaultProps = {
    login: false,
  }

  if (login) {
    return (
      <div className="header">
        <Logo color="blue" />
        <div className="header__user-info">
          <UserIcon size="small" />
          User Name
        </div>
      </div>
    )
  }

  return (
    <div className="header">
      <Logo color="blue" />
      <Button text="Sign up" />
    </div>
  )
}
