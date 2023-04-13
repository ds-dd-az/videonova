import React from "react"
import { useSelector } from "react-redux"
import Popup from "../../components/ui/popup/popup"
import { selectVisibility } from "../../modules/form"
import CloseFormButton from "../close-form-button/close-form-button"
import FormHandler from "../forms/logic/formHandler"

/**
 * Popup logical wrapper
 *
 * Works with state
 * @returns node, popup with blurred background and form handler
 */
export default function PopupWithLogic() {
  const visibility = useSelector(selectVisibility)

  return (
    <Popup isVisible={visibility}>
      <CloseFormButton>
        <div className="bgBlur" />
      </CloseFormButton>
      <FormHandler />
    </Popup>
  )
}
