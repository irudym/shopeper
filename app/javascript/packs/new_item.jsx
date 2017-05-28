/**
 * Created by igor rudym on 25/03/2017.
 */
import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import FormTextInput from './components/form/form_text_input';
import ImagePickerGroup from './containers/image_picker_group';
import withData from './hocs/with_data';
import SubmitButton from './components/submit_button';
import FormSubmit from './components/form_submit';
import FormDescriptionInput from './components/form/form_description_input';
import FormSelectContainer from './containers/form/form_select_container';


const NewItem = ({ token, types, brands }) => {
  const SelectTypes = withData(FormSelectContainer, types);
  const SelectBrands = withData(FormSelectContainer, brands);

  return (
    <FormSubmit
      id="item_id"
      action="/director/items"
      token={token}
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
};

NewItem.propTypes = {
  token: PropTypes.string.isRequired,
  types: PropTypes.arrayOf(PropTypes.object).isRequired,
  brands: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const appBlock = document.getElementById('app-block');

ReactDOM.render(
  <NewItem
    token={$('meta[name=csrf-token]').attr('content')}
    brands={JSON.parse(appBlock.dataset.brands)}
    types={JSON.parse(appBlock.dataset.types)}
  />,
  appBlock,
);
