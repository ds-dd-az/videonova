import React from "react"
import { useSelector } from "react-redux"
import { SelectUsers, SelectVideos } from "../../modules/userdata"
import UserCard from "../../components/ui/user-card/user-card"
import sortByName from "../../external_func/sorting/sorting"
import { selectReversed } from "../../modules/sorting"

/**
 * Users component array
 *
 * Works with state also does mapping, sorting and filtering of array recieved from state
 * @returns array of nodes, a card for each user on the array
 */
export default function Users() {
  const reversed = useSelector(selectReversed)
  const users = useSelector(SelectUsers)
  const videos = useSelector(SelectVideos)
  const initialArr = users.map((element) => element)
  const sortedArr = reversed
    ? initialArr.sort(sortByName).reverse()
    : initialArr.sort(sortByName)
  const returnedArr = sortedArr.map((element) => {
    const countVideos = videos.filter((value) => value.userId === element.id)
    return (
      <UserCard
        vidAmount={countVideos.length}
        data={element}
        key={element.id}
      />
    )
  })
  return returnedArr
}
