import { func } from "prop-types"
import React from "react"

export default async function getUsers() {
  const response = await fetch(
    "https://wonderful-app-lmk4d.cloud.serverless.com/user"
  )
  return response.json()
}

function logSomething(thing) {
  console.log(thing)
  return thing
}
