import React from "react"
import { useSelector } from "react-redux"
import { SelectUsers, SelectVideos } from "../../modules/userdata"
import UserCard from "../../components/ui/user-card/user-card"
import sortByName from "../../external_func/sorting/sorting"
import { selectReversed } from "../../modules/sorting"

export default function Users() {
  const users = useSelector(SelectUsers)
  const videos = useSelector(SelectVideos)
  const reversed = useSelector(selectReversed)
  const initialArr = users.map((element) => element)
  const finalArr = reversed
    ? initialArr.sort(sortByName).reverse()
    : initialArr.sort(sortByName)
  const returnedArr = finalArr.map((element) => {
    const countVideos = videos.filter((value) => value.userId === element.id)
    const redirect = (id) => {
      window.location.href = `http://localhost:3000/user/${id}`
    }
    return (
      <UserCard
        vidAmount={countVideos.length}
        data={element}
        key={element.id}
        redirectFunc={redirect}
      />
    )
  })
  return returnedArr
}
