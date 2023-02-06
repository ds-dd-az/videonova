import React from "react"
import { useDispatch } from "react-redux"
import "./style.css"
import propTypes from "prop-types"
import Logo from "../logo/logo"
import UserIcon from "../user-icon/user-icon"
import Button from "../button/button"
import { signUpForm } from "../../../external_func/dispatches/dispatches"

export default function Header(props) {
  const { login, user, func } = props
  Header.propTypes = {
    /**
     * variation of header based on authorisation
     */
    login: propTypes.bool,
    /**
     * info on current user
     */
    user: propTypes.objectOf(propTypes.string),
    /**
     * redirection function, must lead to users page
     */
    func: propTypes.func,
  }
  Header.defaultProps = {
    login: false,
    user: null,
    func: null,
  }
  const dispatch = useDispatch()

  if (login) {
    return (
      <div className="header">
        <Logo color="blue" />
        <div
          className="header__user-info"
          role="button"
          tabIndex={0}
          onClick={func}
          onKeyDown={func}
        >
          <UserIcon iconSrc={user.userPic} size="small" />
          {user.userName}
        </div>
      </div>
    )
  }

  return (
    <div className="header">
      <Logo color="blue" />
      <Button text="Sign up" click={() => signUpForm(dispatch)} />
    </div>
  )
}
