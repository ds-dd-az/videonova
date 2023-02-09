import axios from "axios"

export async function getUsers() {
  const response = await fetch(
    "https://wonderful-app-lmk4d.cloud.serverless.com/user"
  )
  return response.json()
}

export async function postUser(data) {
  const response = axios.post(
    "https://wonderful-app-lmk4d.cloud.serverless.com/register",
    data
  )
  return (await response).data
}

export async function loginUser(data) {
  const response = axios.post(
    "https://wonderful-app-lmk4d.cloud.serverless.com/auth",
    data
  )
  return (await response).data
}
