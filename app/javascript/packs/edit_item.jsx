/**
 * Created by igor rudym on 25/03/2017.
 */
import React from 'react';
import ReactDOM from 'react-dom';

import NameInput from './components/name_input';
import ImagePickerGroup from './containers/image_picker_group';
import SelectContainer from './containers/select/select_container';
import SubmitButton from './components/submit_button';
import FormSubmit from './components/form_submit';
import DescriptionInput from './components/description_input';
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

  const SelectTypes = withData(SelectContainer, types, typesDefault);
  const SelectBrands = withData(SelectContainer, brands, brandsDefault);

  return (
    <FormSubmit
      id={`edit_item_${data.id}`}
      action={`/director/items/${data.id}`}
      token={$('meta[name=csrf-token]').attr('content')}
      // enctype="multipart/form-data"
      method="patch"
    >
      <NameInput name="name" model="item" defaultValue={data.name} />
      <DescriptionInput name="description" model="item" defaultValue={data.description} />
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
