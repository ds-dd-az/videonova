import React from "react"
import { useSelector } from "react-redux"
import { SelectUsers, SelectVideos } from "../../modules/userdata"
import UserCard from "../../components/ui/user-card/user-card"

export default function Users() {
  const users = useSelector(SelectUsers)
  const videos = useSelector(SelectVideos)
  const usersArr = users.map((element) => {
    const countVideos = videos.filter((value) => value.userId === element.id)
    return (
      <UserCard
        vidAmount={countVideos.length}
        data={element}
        key={element.id}
      />
    )
  })
  return usersArr
}
