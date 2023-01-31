export function signInForm(dispatch) {
  dispatch({
    type: "form/show",
    payload: { type: "signIn" },
  })
}

export function reverseArr(dispatch) {
  dispatch({
    type: "sorting/reverse",
  })
}

export function addVideoForm(dispatch) {
  dispatch({
    type: "form/show",
    payload: { type: "addVideo" },
  })
}

export function closeForm(dispatch) {
  dispatch({
    type: "form/hide",
  })
  dispatch({
    type: "errors/clearError",
  })
}
