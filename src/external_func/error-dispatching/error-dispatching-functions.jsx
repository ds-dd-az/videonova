import React from "react"

export function dispatchNameError(message) {
  return {
    type: "errors/addNameError",
    payload: message,
  }
}

export function dispatchPasswordError(message) {
  return {
    type: "errors/addPasswordError",
    payload: message,
  }
}
