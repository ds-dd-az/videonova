import axios from "axios"

/**
 * getUsers function
 * @returns promise
 */
export async function getUsers() {
  const response = await fetch(
    "https://wonderful-app-lmk4d.cloud.serverless.com/user"
  )
  return response.json()
}

/**
 * postUser function
 * @returns response's data
 */
export async function postUser(data) {
  const response = axios.post(
    "https://wonderful-app-lmk4d.cloud.serverless.com/register",
    data
  )
  return (await response).data
}

/**
 * loginUser function
 * @returns response's data
 */
export async function loginUser(data) {
  const response = axios.post(
    "https://wonderful-app-lmk4d.cloud.serverless.com/auth",
    data
  )
  return (await response).data
}
