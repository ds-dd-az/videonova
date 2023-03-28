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

const getToken = () => {
  const { cookie } = document
  const token = cookie.split("=")[1]
  return token
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
  const axiosConfig = {
    headers: {
      Authorization: `${getToken()}`,
    },
  }
  const response = axios.post(
    "https://wonderful-app-lmk4d.cloud.serverless.com/video",
    videoInfo,
    axiosConfig
  )
  return (await response).data
}
