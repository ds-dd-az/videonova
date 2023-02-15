import axios from "axios"

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

export async function postVideo(data) {
  const videoInfo = {
    url: data.url,
    title: data.title,
    description: data.description,
  }
  console.log(data)
  const response = axios.post(
    "https://wonderful-app-lmk4d.cloud.serverless.com/video",
    videoInfo,
    axiosConfig
  )
  return (await response).data
}
