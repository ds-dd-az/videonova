import React from "react"
import { useSelector } from "react-redux"
import "./style.css"
import propTypes from "prop-types"
import Logo from "../logo/logo"
import UserIcon from "../user-icon/user-icon"
import Button from "../button/button"
import { selectUserName } from "../../../modules/user"

export default function Header(props) {
  const { login } = props
  const username = useSelector(selectUserName)
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
          {username}
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
