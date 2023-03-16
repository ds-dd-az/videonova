import axios from "axios"

/**
 * getVideos function
 * @returns promise
 */
export async function getVideos() {
  const response = await fetch(
    "https://wonderful-app-lmk4d.cloud.serverless.com/video"
  )
  return response.json()
}

function getToken() {
  const { cookie } = document
  const token = cookie.split("=")[1]
  return token
}

const axiosConfig = {
  headers: {
    Authorization: `${getToken()}`,
  },
}

/**
 * postVideo
 * @param data - object of strings, information about video that needs to be pushed(url, title and description)
 * @returns response's data
 */
export async function postVideo(data) {
  const videoInfo = {
    url: data.url,
    title: data.title,
    description: data.description,
  }
  const response = axios.post(
    "https://wonderful-app-lmk4d.cloud.serverless.com/video",
    videoInfo,
    axiosConfig
  )
  return (await response).data
}
