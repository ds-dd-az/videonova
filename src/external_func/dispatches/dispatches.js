/**
 * Show sigIn form function
 * @param dispatch - useDispatch hook
 */
export function showSignInForm(dispatch) {
  dispatch({
    type: "form/show",
    payload: { type: "signIn" },
  })
}

/**
 * Show sigUp form function
 * @param dispatch - useDispatch hook
 */
export function showSignUpForm(dispatch) {
  dispatch({
    type: "form/show",
    payload: { type: "signUp" },
  })
}

/**
 *Reverse users array function
 * @param dispatch - useDispatch hook
 */
export function reverseArr(dispatch) {
  dispatch({
    type: "sorting/reverse",
  })
}

/**
 * Show addVideo form function
 * @param dispatch - useDispatch hook
 */
export function showAddVideoForm(dispatch) {
  dispatch({
    type: "form/show",
    payload: { type: "addVideo" },
  })
}

/**
 * Form closing function
 * @param dispatch - useDispatch hook
 */
export function closeForm(dispatch) {
  dispatch({
    type: "form/hide",
  })
  dispatch({
    type: "errors/clearError",
  })
}

/**
 * User's logout function
 * @param dispatch - useDispatch hook
 */
export function logOut(dispatch) {
  dispatch({
    type: "data/logOut",
  })
}
