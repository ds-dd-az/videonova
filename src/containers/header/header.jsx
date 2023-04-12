import React from "react"
import "../../styles/header/header.css"
import propTypes from "prop-types"
import { Link } from "react-router-dom"
import Logo from "../../components/ui/logo/logo"
import UserIcon from "../../components/ui/user-icon/user-icon"
import Button from "../../components/ui/button/button"

/**
 * Header component
 * @param login - bool, changes variation of header based on authorisation, if true returns header with user info
 * @param user - object of strings, info on current user
 * @param func - button function
 * @param signOutEnabled - bool, if true displays sign out button
 * @returns node, header component
 */
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
     * if true displays sign out button
     */
    signOutEnabled: propTypes.bool,
  }
  Header.defaultProps = {
    login: false,
    user: { userPic: "https://picsum.photos/200", userName: "User Name" },
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
        <Link
          to={`/videonova/user/${user.id}`}
          style={{ textDecoration: "none" }}
        >
          <div className="header__user-info" role="button" tabIndex={0}>
            <UserIcon iconSrc={user.userPic} size="small" />
            {user.userName}
          </div>
        </Link>
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
