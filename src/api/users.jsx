import { func } from "prop-types"
import React from "react"
import { useDispatch } from "react-redux"

export async function getUsers() {
  const response = await fetch(
    "https://wonderful-app-lmk4d.cloud.serverless.com/user"
  )
  return response.json()
}

function logSomething(thing) {
  console.log(thing)
  return thing
}

export async function postUser(userdata, { dispatch }) {
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
  if (response.status === 409) {
    dispatch({ type: "errors/addNameError", payload: "this name is taken" })
  }
  console.log(response.status)
}
