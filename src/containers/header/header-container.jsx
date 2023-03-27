import React from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  SelectCurrentUserId,
  SelectUsers,
} from "../../modules/userdata/userdata.selectors"
import Header from "../../components/ui/header/header"
import {
  showSignInForm,
  logOut,
} from "../../external_func/dispatches/dispatches"
import { fetchUsers } from "../../modules/userdata"

/**
 * Header logical container
 *
 * Works with state
 * @returns node, header based on state with buttons or current user's info
 */
export default function AdaptiveHeader() {
  const dispatch = useDispatch()
  let login = false
  const userId = useSelector(SelectCurrentUserId)
  const allUsers = useSelector(SelectUsers)
  const findCurrentUser = () => {
    dispatch(fetchUsers)
    const filteredArr = allUsers.filter((element) => element.id === userId)
    return filteredArr[0]
  }
  const openSignIn = () => {
    showSignInForm(dispatch)
  }
  let func = openSignIn
  let signOutButtonDisplay = false
  const signOut = () => {
    logOut(dispatch)
  }
  if (userId !== null) {
    login = true
    if (window.location.href.includes(`/user/${userId}`)) {
      func = signOut
      signOutButtonDisplay = true
    } else func = null
  }
  return (
    <Header
      login={login}
      user={findCurrentUser()}
      signOutEnabled={signOutButtonDisplay}
      func={func}
    />
  )
}
