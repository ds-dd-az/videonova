import React from "react"
import { useDispatch } from "react-redux"

export async function getUsers() {
  const response = await fetch(
    "https://wonderful-app-lmk4d.cloud.serverless.com/user"
  )
  return response.json()
}
function Exception(message) {
  this.message = message
}
// eslint-disable-next-line consistent-return
export async function postUser(userdata) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const dispatch = useDispatch()
  try {
    const response = await fetch(
      "https://wonderful-app-lmk4d.cloud.serverless.com/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userdata),
      }
    )
    console.log(response.status)
    if (response.status === 409) {
      throw new Exception("You are already registered or this name is taken")
    }
  } catch (error) {
    console.log(error.message)
    return error
  }
}
