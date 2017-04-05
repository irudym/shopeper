/**
 * Created by igor rudym on 25/03/2017.
 */
import React from 'react';
import ReactDOM from 'react-dom';

import FormTextInput from './components/form/form_text_input';
import FormSelectContainer from './containers/form/form_select_container';
import SubmitButton from './components/submit_button';
import FormSubmit from './components/form_submit';
import FormDescriptionInput from './components/form/form_description_input';
import withData from './hocs/with_data';


const EditItem = ({ data, types, brands }) => {

  const typesDefault = types.reduce((res, item) => {
    if (item.id === data.type_id) return item;
    return res;
  }, {});

  const brandsDefault = brands.reduce((res, item) => {
    if (item.id === data.brand_id) return item;
    return res;
  }, {});

  const SelectTypes = withData(FormSelectContainer, types, typesDefault);
  const SelectBrands = withData(FormSelectContainer, brands, brandsDefault);

  return (
    <FormSubmit
      id={`edit_item_${data.id}`}
      action={`/director/items/${data.id}`}
      token={$('meta[name=csrf-token]').attr('content')}
      // enctype="multipart/form-data"
      method="patch"
    >
      <FormTextInput name="name" model="item" defaultValue={data.name} />
      <FormDescriptionInput name="description" model="item" defaultValue={data.description} />
      <SelectTypes name="type" model="item" />
      <SelectBrands name="brand" model="item" />
      <SubmitButton title="Update Item" />
    </FormSubmit>
  );
};


const appBlock = document.getElementById('app-block');

ReactDOM.render(
  <EditItem
    data={JSON.parse(appBlock.dataset.json)}
    types={JSON.parse(appBlock.dataset.types)}
    brands={JSON.parse(appBlock.dataset.brands)}
  />,
  appBlock,
);
