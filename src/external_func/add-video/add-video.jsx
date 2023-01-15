import { unwrapResult } from "@reduxjs/toolkit"
import { addVideo, fetchVideos } from "../../modules/userdata"

export default function addNewVideo(dispatch, url, title, description, userId) {
  console.log("adding vid")
  dispatch(
    addVideo({
      url,
      title,
      description,
      userId,
    })
  )
    .then(unwrapResult)
    .then((promiseResult) => {
      console.log(promiseResult)
      dispatch({
        type: "form/hide",
      })
      dispatch({
        type: "errors/cleanError",
      })
      dispatch(fetchVideos)
    })
    .catch((error) => {
      if (error.message === "Request failed with status code 403") {
        console.log("hey wrong auth")
      }
      dispatch({
        type: "errors/addError",
        payload: "Unexpected error ocurred, try again later",
      })
    })
}
