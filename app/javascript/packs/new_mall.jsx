/**
 * Created by igor rudym on 31/03/2017.
 */
import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

import FormTextInput from './components/form/form_text_input';
import ImagePickerGroup from './containers/image_picker_group';
import SubmitButton from './components/submit_button';
import FormSubmit from './components/form_submit';
import FormDescriptionInput from './components/form/form_description_input';
import FormSelectItemsContainer from './containers/form/form_select_items_container';
import withData from './hocs/with_data';

const NewMall = ({ shops }) => {
  const FormSelectShops = withData(FormSelectItemsContainer, shops, []);

  return (
    <FormSubmit
      id="mall_id"
      action="/director/malls"
      token={$('meta[name=csrf-token]').attr('content')}
      enctype="multipart/form-data"
    >
      <FormTextInput name="name" model="mall" />
      <FormTextInput name="address" model="mall" />
      <FormDescriptionInput name="description" model="mall" />
      <ImagePickerGroup names={['image']} model="mall" />
      <FormSelectShops name="shops_in_mall" model="mall" />
      <SubmitButton title="Add Mall" />
    </FormSubmit>
  );
};

NewMall.propTypes = {
  shops: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    value: PropTypes.string,
  })).isRequired,
};

const appBlock = document.getElementById('app-block');

ReactDOM.render(
  <NewMall shops={JSON.parse(appBlock.dataset.shops)} />,
  document.getElementById('app-block'),
);
