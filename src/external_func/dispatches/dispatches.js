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
