import React from "react"
import { useSelector } from "react-redux"
import {
  SelectCurrentUserId,
  SelectUsers,
} from "../../modules/userdata/userdata.selectors"
import Header from "../../components/ui/header/header"

export default function AdaptiveHeader() {
  let login = false
  const userId = useSelector(SelectCurrentUserId)
  const allUsers = useSelector(SelectUsers)
  const currentUser = allUsers.filter((element) => element.id === userId)
  console.log(currentUser[0])
  const redirect = () => {
    window.location.href = `http://localhost:3000/user/${userId}`
  }
  if (userId !== null) {
    login = true
  }
  return <Header login={login} user={currentUser[0]} func={redirect} />
}
