import React from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  SelectCurrentUserId,
  SelectUsers,
} from "../../modules/userdata/userdata.selectors"
import Header from "../../components/ui/header/header"
import { signInForm, logOut } from "../../external_func/dispatches/dispatches"

export default function AdaptiveHeader() {
  const dispatch = useDispatch()
  let login = false
  const userId = useSelector(SelectCurrentUserId)
  const allUsers = useSelector(SelectUsers)
  const currentUser = allUsers.filter((element) => element.id === userId)
  const openSignIn = () => {
    signInForm(dispatch)
  }
  let func = openSignIn
  let signOutButtonDisplay = false
  const redirect = () => {
    window.location.href = `http://localhost:3000/user/${userId}`
  }
  const signOut = () => {
    logOut(dispatch)
    window.location.href = `http://localhost:3000`
  }
  if (userId !== null) {
    login = true
    if (window.location.href === `http://localhost:3000/user/${userId}`) {
      func = signOut
      signOutButtonDisplay = true
    } else func = redirect
  }

  return (
    <Header
      login={login}
      user={currentUser[0]}
      signOutEnabled={signOutButtonDisplay}
      func={func}
    />
  )
}
