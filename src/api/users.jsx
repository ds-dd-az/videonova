import React from "react"
import { useDispatch } from "react-redux"

export async function getUsers() {
  const response = await fetch(
    "https://wonderful-app-lmk4d.cloud.serverless.com/user"
  )
  return response.json()
}

// eslint-disable-next-line consistent-return
export async function postUser(userdata) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const dispatch = useDispatch()
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
  if (response.ok) {
    console.log(response)
    // dispatch({ type: "errors/cleanError" })
    return response.json()
  }
  if (response.status === 409) {
    console.log(response)
    /* dispatch({
      type: "errors/addError",
      payload: "This name is taken or you have already registered",
    }) */
  }
  console.log(response)
  console.log("eeeee")
}
