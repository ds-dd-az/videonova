import React from "react"
import { useSelector } from "react-redux"
import { SelectUsers, SelectVideos } from "../../modules/userdata"
import UserCard from "../../components/ui/user-card/user-card"

function sortByName(a, b) {
  if (a.slug > b.slug) return 1
  if (a.slug < b.slug) return -1
  return 0
}

export default function Users() {
  const users = useSelector(SelectUsers)
  const videos = useSelector(SelectVideos)
  const initialArr = users.map((arr) => arr)
  console.log(initialArr)
  console.log(initialArr.sort(sortByName))
  const usersArr = initialArr.map((element) => {
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
