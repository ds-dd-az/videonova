import { unwrapResult } from "@reduxjs/toolkit"
import { addVideo, fetchVideos } from "../../modules/userdata"
import findPreview from "../find-preview-src/find-preview-src"

/**
 * Add new video function
 *
 * Dispatches addVideo redux thunk, unwraps its result and if succesfull opens "video added" message component,
 * if not it will display an error message inside of the form
 * @param dispatch - useDispatch hook
 * @param url - video's url
 * @param title - title of video that will be displayed on the thumbnail
 * @param description - video's description for thumbnail
 * @param token - user's auth token used for post request
 */
function addNewVideo(dispatch, url, title, description) {
  dispatch(
    addVideo({
      url,
      title,
      description,
    })
  )
    .then(unwrapResult)
    .then(() => {
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
          img: `${findPreview(url)}`,
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
      } else {
        dispatch({
          type: "errors/addError",
          payload: "Unexpected error ocurred, try again later",
        })
      }
    })
}

export default function submitVideo(dispatch, url, title, description) {
  dispatch({
    type: "errors/clearError",
  })
  if (
    (url.includes("http://www.youtube.com") ||
      url.includes("http://youtube.com") ||
      url.includes("http://m.youtube.com") ||
      url.includes("https://www.youtube.com") ||
      url.includes("https://youtube.com") ||
      url.includes("https://m.youtube.com") ||
      url.includes("http://youtu.be") ||
      url.includes("https://youtu.be")) === false
  ) {
    dispatch({
      type: "errors/addError",
      payload: "Seems like what you are trying to pass is not a youtube link",
    })
  } else if (!title || !description) {
    dispatch({
      type: "errors/addError",
      payload: "both title and description must not be empty",
    })
  } else {
    addNewVideo(dispatch, url, title, description)
  }
}
