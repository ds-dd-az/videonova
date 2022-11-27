/* eslint-disable import/prefer-default-export */
import React from "react"
import { useDispatch } from "react-redux"

// move it to the big function later
/* const dispatch = useDispatch()
 dispatch({
  type: "errors/addPasswordError",
  payload: "Passwords must be indentical",
}) */
export function isIndenticalPass(value1, value2) {
  if (value1 === value2) {
    return true
  }
  return false
}
