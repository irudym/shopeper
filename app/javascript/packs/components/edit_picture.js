import React from 'react';
import PropTypes from 'prop-types';

import FormSubmit from './form_submit';
import SubmitButton from './submit_button';
import FormTextInput from './form/form_text_input';
import FormDescriptionInput from './form/form_description_input';
import ImagePickerGroup from '../containers/image_picker_group';


const EditPicture = ({ picture, action, token, method }) => (
  <FormSubmit
    id={`edit_picture_${picture.id}`}
    action={action}
    token={token}
    enctype="multipart/form-data"
    method={method}
  >
    <FormTextInput name="name" model="picture" defaultValue={picture.name} />
    <FormDescriptionInput name="description" model="picture" defaultValue={picture.description} />
    <ImagePickerGroup
      names={['image']}
      model="picture"
      pictures={[picture.url]}
    />
    <SubmitButton title={method === 'patch' ? 'Update Picture' : 'Add Picture'} />
  </FormSubmit>
);


EditPicture.propTypes = {
  picture: PropTypes.shape({
    id: PropTypes.number,
    url: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
  action: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
};

export default EditPicture;
