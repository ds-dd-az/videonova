import { unwrapResult } from "@reduxjs/toolkit"
import { addVideo, fetchVideos } from "../../modules/userdata"

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
      } else {
        dispatch({
          type: "errors/addError",
          payload: "Unexpected error ocurred, try again later",
        })
      }
    })
}
