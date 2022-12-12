import { useDispatch } from "react-redux"
import { unwrapResult } from "@reduxjs/toolkit"
import { registerUser, fetchUsers } from "../../modules/userdata"

export default function useReg() {
  const dispatch = useDispatch()
  dispatch(
    registerUser({
      username: "nice name",
      password: "1112",
    })
  )
    .then(unwrapResult)
    .then((promiseResult) => {
      console.log(promiseResult)
      dispatch(fetchUsers())
    })
    .catch((error) => {
      if (error.message === "Request failed with status code 409") {
        dispatch({
          type: "errors/addNameError",
          payload: "This name is already taken or you have already registered",
        })
      } else {
        dispatch({
          type: "errors/addError",
          payload: "Unexpected error ocurred, try again later",
        })
      }
    })
}
