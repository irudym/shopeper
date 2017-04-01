/**
 * Created by igor rudym on 31/03/2017.
 */
import React from 'react';
import ReactDOM from 'react-dom';

import TextInput from './components/text_input';
import ImagePickerGroup from './containers/image_picker_group';
import SubmitButton from './components/submit_button';
import FormSubmit from './components/form_submit';
import DescriptionInput from './components/description_input';


const NewMall = () => (
  <FormSubmit
    id="mall_id"
    action="/director/malls"
    token={$('meta[name=csrf-token]').attr('content')}
    enctype="multipart/form-data"
  >
    <TextInput name="name" model="mall" />
    <TextInput name="address" model="mall" />
    <DescriptionInput name="description" model="mall" />
    <ImagePickerGroup names={['image']} model="mall" />
    <SubmitButton title="Add Mall" />
  </FormSubmit>
);

ReactDOM.render(
  <NewMall />,
  document.getElementById('app-block'),
);
