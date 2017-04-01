/**
 * Created by igor rudym on 25/03/2017.
 */
import React from 'react';
import ReactDOM from 'react-dom';

import NameInput from './components/name_input';
import ImagePickerGroup from './containers/image_picker_group';
import SelectWithUrl from './hocs/select_with_url';
import SubmitButton from './components/submit_button';
import FormSubmit from './components/form_submit';
import DescriptionInput from './components/description_input';


const SelectTypes = SelectWithUrl('/director/types.json');
const SelectBrands = SelectWithUrl('/director/brands.json');

const NewItem = () => (
  <FormSubmit
    id="item_id"
    action="/director/items"
    token={$('meta[name=csrf-token]').attr('content')}
    enctype="multipart/form-data"
  >
    <NameInput name="name" model="item" />
    <DescriptionInput name="description" model="item" />
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
