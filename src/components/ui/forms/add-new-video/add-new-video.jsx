/* eslint-disable react/prop-types */
import React, { useEffect, useId } from "react"
import { useDispatch } from "react-redux"
import InputField from "../../input-field/input-field"
import Button from "../../button/button"
import addNewVideo from "../../../../external_func/add-video/add-video"
import FormError from "../../../../containers/error-message-cont/form-error"
import CloseForm from "../../../../containers/close-form-button/close-form-button"
import Heading from "../../headings/headings"

export default function VideoForm(submitFunc) {
  return (
    <div className="add-new-video-form">
      <Heading size={1}>
        Add <span>New</span> Video
      </Heading>
      <FormError />
      <form>
        <label htmlFor="videoLink">
          <Heading size={3}>Youtube Link</Heading>
          <InputField
            variant="smallText"
            id="videoLink"
            placeholder="Past link..."
          />
        </label>
        <label htmlFor="videoName">
          <Heading size={3}>Name of video</Heading>
          <InputField
            variant="smallText"
            id="videoName"
            placeholder="Type name..."
          />
        </label>
        <label htmlFor="videoDesc">
          <Heading size={3}>Description</Heading>
          <InputField
            id="videoDesc"
            variant="bigText"
            placeholder="Type description..."
          />
        </label>
        <div className="add-new-video-form__buttons">
          <CloseForm>
            <Button text="Cancel" secondary />
          </CloseForm>
          <Button text="Submit" click={() => submitFunc} />
        </div>
      </form>
    </div>
  )
}
