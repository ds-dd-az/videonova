import React from "react"
import "./style.css"
import propTypes from "prop-types"
import Logo from "../logo/logo"
import UserIcon from "../user-icon/user-icon"
import Button from "../button/button"

export default function Header(props) {
  const { login, user, func, signOutEnabled } = props
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
     * button function
     */
    func: propTypes.func,
    /**
     * displays could sign out be performed or not
     */
    signOutEnabled: propTypes.bool,
  }
  Header.defaultProps = {
    login: false,
    user: null,
    func: null,
    signOutEnabled: false,
  }

  if (login && signOutEnabled) {
    return (
      <div className="header">
        <Logo color="blue" />
        <Button text="Log Out" click={func} secondary />
      </div>
    )
  }

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
      <Button text="Sign In" click={func} />
    </div>
  )
}
