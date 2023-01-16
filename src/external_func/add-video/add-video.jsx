import { unwrapResult } from "@reduxjs/toolkit"
import axios from "axios"
import { addVideo, fetchVideos } from "../../modules/userdata"

export default function addNewVideo(dispatch, url, title, description, token) {
  console.log("adding vid")
  dispatch(
    addVideo({
      url,
      title,
      description,
      token,
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
        dispatch({
          type: "errors/addNameError",
          payload:
            "There is a trouble with your authentification, please try to login again",
        })
      }
      dispatch({
        type: "errors/addError",
        payload: "Unexpected error ocurred, try again later",
      })
    })
}
