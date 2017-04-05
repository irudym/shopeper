/**
 * Created by igor rudym on 25/03/2017.
 */
import React from 'react';
import ReactDOM from 'react-dom';

import FormTextInput from './components/form/form_text_input';
import ImagePickerGroup from './containers/image_picker_group';
import SelectWithUrl from './hocs/select_with_url';
import SubmitButton from './components/submit_button';
import FormSubmit from './components/form_submit';
import FormDescriptionInput from './components/form/form_description_input';


const SelectTypes = SelectWithUrl('/director/types.json');
const SelectBrands = SelectWithUrl('/director/brands.json');

const NewItem = () => (
  <FormSubmit
    id="item_id"
    action="/director/items"
    token={$('meta[name=csrf-token]').attr('content')}
    enctype="multipart/form-data"
  >
    <FormTextInput name="name" model="item" />
    <FormDescriptionInput name="description" model="item" />
    <SelectTypes name="type" model="item" />
    <SelectBrands name="brand" model="item" />
    <ImagePickerGroup names={['image1', 'image2', 'image3']} model="item" />
    <SubmitButton title="Add Item" />
  </FormSubmit>
);

ReactDOM.render(
    <NewItem />,
    document.getElementById('app-block'),
);
