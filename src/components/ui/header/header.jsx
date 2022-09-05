import React from "react"
import { useDispatch, useSelector } from "react-redux"
import "./style.css"
import propTypes from "prop-types"
import Logo from "../logo/logo"
import UserIcon from "../user-icon/user-icon"
import Button from "../button/button"
import { selectUserId, selectUserName } from "../../../modules/user"

export default function Header(props) {
  const { login } = props
  const username = useSelector(selectUserName)
  const dispatch = useDispatch()
  function showForm() {
    dispatch({
      type: "form/show",
      payload: "signUp",
    })
  }
  const userId = useSelector(selectUserId)
  function redirect() {
    window.location.href = `http://localhost:3000/user/${userId}`
  }
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
        <div
          className="header__user-info"
          role="button"
          tabIndex={0}
          onKeyDown={redirect}
          onClick={redirect}
        >
          <UserIcon size="small" />
          {username}
        </div>
      </div>
    )
  }

  return (
    <div className="header">
      <Logo color="blue" />
      {/* eslint-disable-next-line react/jsx-no-bind */}
      <Button text="Sign up" click={showForm} />
    </div>
  )
}
