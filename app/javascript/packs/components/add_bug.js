import React, { PropTypes } from 'react';
import ModalView from './modal/modal_view';
import FormSubmit from './form_submit';
import SubmitButton from './submit_button';
import FormTextInput from './form/form_text_input';
import FormDescriptionInput from './form/form_description_input';
import ImagePickerGroup from '../containers/image_picker_group';
import ShowErrors from './show_errors';


const AddBug = ({ title, onClose, onSubmit, isOpen, id, action, token,
  onTitleChange, onDescriptionChange, errors }) => (
    <ModalView
      title={`${title}`}
      onClose={onClose}
      isOpen={isOpen}
      contentLabel="add record form"
    >
      {errors.length !== 0 ?
        <ShowErrors errors={errors} />
        :
        ''
      }
      <FormSubmit
        id={id}
        action={action}
        token={token}
        enctype="multipart/form-data"
        onSubmit={onSubmit}
      >
        <FormTextInput
          model="bug"
          name="title"
          onChange={onTitleChange}
        />
        <FormDescriptionInput
          model="bug"
          name="description"
          onChange={onDescriptionChange}
        />
        <ImagePickerGroup names={['picture']} model="bug" />
        <SubmitButton title="Add" />
      </FormSubmit>
    </ModalView>
);

AddBug.propTypes = {
  title: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onTitleChange: PropTypes.func.isRequired,
  onDescriptionChange: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  token: PropTypes.string.isRequired,
  action: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  errors: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default AddBug;
