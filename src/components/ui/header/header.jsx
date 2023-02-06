import React from "react"
import { useDispatch, useSelector } from "react-redux"
import "./style.css"
import propTypes from "prop-types"
import Logo from "../logo/logo"
import UserIcon from "../user-icon/user-icon"
import Button from "../button/button"

export default function Header(props) {
  const { login, user } = props
  const dispatch = useDispatch()
  function showForm() {
    dispatch({
      type: "form/show",
      payload: { type: "signUp" },
    })
  }
  // function redirect() {
  //   window.location.href = `http://localhost:3000/user/${userId}`
  // }
  Header.propTypes = {
    /**
     * variation of header based on authorisation
     */
    login: propTypes.bool,
    /**
     * info on current user
     */
    user: propTypes.objectOf(propTypes.string),
  }
  Header.defaultProps = {
    login: false,
    user: null,
  }

  if (login) {
    return (
      <div className="header">
        <Logo color="blue" />
        <div className="header__user-info" role="button" tabIndex={0}>
          <UserIcon iconSrc={user.userPic} size="small" />
          {user.userName}
        </div>
      </div>
    )
  }

  return (
    <div className="header">
      <Logo color="blue" />
      <Button text="Sign up" click={() => showForm()} />
    </div>
  )
}
