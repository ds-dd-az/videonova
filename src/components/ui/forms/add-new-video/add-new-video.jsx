import React from "react"
import propTypes from "prop-types"
import InputField from "../../input-field/input-field"
import Button from "../../button/button"
import FormError from "../../../../containers/error-message/form-error-logic"
import Heading from "../../headings/headings"

/**
 * Form component for adding video
 * @param submitFunc - function performed on submit
 * @param errorMessage - string, error message that will be displayed when error is occured
 * @param formCloser - node, component with closing function
 * @returns node, "add video" form component
 */
export default function VideoForm(props) {
  const { submitFunc, errorMessage, formCloser } = props
  VideoForm.propTypes = {
    /**
     * function performed on submit
     */
    submitFunc: propTypes.func,
    /**
     * error message that will be displayed when error is occured
     */
    errorMessage: propTypes.string,
    /**
     * component with closing function
     */
    formCloser: propTypes.node,
  }
  VideoForm.defaultProps = {
    submitFunc: null,
    errorMessage: null,
    formCloser: <Button text="Cancel" secondary />,
  }

  return (
    <div className="add-new-video-form">
      <Heading size={1}>
        Add <span>New</span> Video
      </Heading>
      <FormError message={errorMessage} />
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
          {formCloser}
          <Button text="Submit" click={submitFunc} />
        </div>
      </form>
    </div>
  )
}
