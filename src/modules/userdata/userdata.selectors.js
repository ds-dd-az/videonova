import { useSelector } from "react-redux"

export const rootSelector = (state) => state

export const SelectUsers = () => {
  const allUsers = useSelector((state) => state.AllUsers)
  return allUsers
}

export const selectAllVideos = (state) => state.videos
