import React from "react"
import { useSelector } from "react-redux"
import { SelectUsers } from "../../modules/userdata"
import UserIcon from "../../components/ui/user-icon/user-icon"
import Heading from "../../components/ui/headings/headings"

export default function UserPageHeading() {
  const pageId = window.location.href.split("user/")[1]
  const users = useSelector(SelectUsers)
  const owner = users.find((value) => value.id === pageId)

  return (
    <div className="user">
      <UserIcon iconSrc={owner.userPic} size="big" />
      <Heading size={1}>{owner.userName} </Heading>
    </div>
  )
}
