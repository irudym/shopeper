/**
 * Created by igor rudym on 04/04/2017.
 */
import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

import FormTextInput from './components/form/form_text_input';
import SubmitButton from './components/submit_button';
import FormSubmit from './components/form_submit';
import FormDescriptionInput from './components/form/form_description_input';
import FormSelectItemsContainer from './containers/form/form_select_items_container';
import withData from './hocs/with_data';


const NewShop = ({ brands }) => {
  const FormSelectBrands = withData(FormSelectItemsContainer, brands, []);

  return (
    <FormSubmit
      id="shop_id"
      action="/director/shops"
      token={$('meta[name=csrf-token]').attr('content')}
      enctype="multipart/form-data"
    >
      <FormTextInput name="name" model="shop" />
      <FormTextInput name="address" model="shop" />
      <FormDescriptionInput name="description" model="shop" />
      <FormSelectBrands name="brands_in_shop" model="shop" />
      <SubmitButton title="Add Shop" />
    </FormSubmit>
  );
};


NewShop.propTypes = {
  brands: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    value: PropTypes.string,
  })).isRequired,
};

const appBlock = document.getElementById('app-block');

ReactDOM.render(
  <NewShop brands={JSON.parse(appBlock.dataset.brands)} />,
  appBlock,
);
