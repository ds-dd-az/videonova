import { unwrapResult } from "@reduxjs/toolkit"
import { addVideo, fetchVideos } from "../../modules/userdata"

export default function addNewVideo(dispatch, url, title, description, token) {
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
      dispatch({
        type: "form/hide",
      })
      dispatch({
        type: "errors/cleanError",
      })
      dispatch(fetchVideos())
      dispatch({
        type: "form/show",
        payload: {
          type: "videoAdded",
          img: `${url}`,
        },
      })
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
