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


const EditShop = ({ shop, selected, brands }) => {
  const FormSelectBrands = withData(FormSelectItemsContainer, brands, selected);

  return (
    <FormSubmit
      id={`edit_shop_${shop.id}`}
      action={`/director/shops/${shop.id}`}
      token={$('meta[name=csrf-token]').attr('content')}
      method="patch"
    >
      <FormTextInput name="name" model="shop" defaultValue={shop.name} />
      <FormTextInput name="address" model="shop" defaultValue={shop.address} />
      <FormDescriptionInput name="description" model="shop" defaultValue={shop.description} />
      <FormSelectBrands name="brands_in_shop" model="shop" />
      <SubmitButton title="Update Shop" />
    </FormSubmit>
  );
};


EditShop.propTypes = {
  shop: PropTypes.object.isRequired,
  brands: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    value: PropTypes.string,
  })).isRequired,
  selected: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    value: PropTypes.string,
  })).isRequired,
};

const appBlock = document.getElementById('app-block');

ReactDOM.render(
  <EditShop
    shop={JSON.parse(appBlock.dataset.shop)}
    brands={JSON.parse(appBlock.dataset.brands)}
    selected={JSON.parse(appBlock.dataset.selected)}
  />,
  appBlock,
);
