/**
 * Created by igor rudym on 23/05/2017. (dd/mm/year)
 */

import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import FormSubmit from './components/form_submit';
import SubmitButton from './components/submit_button';
import FormTextInput from './components/form/form_text_input';
import FormDescriptionInput from './components/form/form_description_input';
import ImagePickerGroup from './containers/image_picker_group';


const EditPicture = ({ picture }) => (
  <FormSubmit
    id={`edit_picture_${picture.id}`}
    action={`/director/pictures/${picture.id}`}
    token={$('meta[name=csrf-token]').attr('content')}
    enctype="multipart/form-data"
    method="patch"
  >
    <FormTextInput name="name" model="picture" defaultValue={picture.name} />
    <FormDescriptionInput name="description" model="picture" defaultValue={picture.description} />
    <ImagePickerGroup
      names={['image']}
      model="picture"
      pictures={[picture.url]}
    />
    <SubmitButton title="Update Picture" />
  </FormSubmit>
);


EditPicture.propTypes = {
  picture: PropTypes.shape({
    id: PropTypes.number,
    url: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};


const appBlock = document.getElementById('app-block');

ReactDOM.render(
  <EditPicture picture={JSON.parse(appBlock.dataset.picture)} />,
  document.getElementById('app-block'),
);
