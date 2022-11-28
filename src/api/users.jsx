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

export async function postUser(userdata) {
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
}
