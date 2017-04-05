/**
 * Created by igor rudym on 01/04/2017. (dd/mm/year)
 */
import React from 'react';
import ReactDOM from 'react-dom';

import FormTextInput from './components/form/form_text_input';
import SubmitButton from './components/submit_button';
import FormSubmit from './components/form_submit';
import FormDescriptionInput from './components/form/form_description_input';
import FormSelectItemsContainer from './containers/form/form_select_items_container';
import withData from './hocs/with_data';


const EditMall = ({ data, shops, shopsInMall }) => {

  const FormSelectShops = withData(FormSelectItemsContainer, shops, shopsInMall);

  return (
    <FormSubmit
      id={`edit_mall_${data.id}`}
      action={`/director/malls/${data.id}`}
      token={$('meta[name=csrf-token]').attr('content')}
      method="patch"
    >
      <FormTextInput name="name" model="mall" defaultValue={data.name} />
      <FormTextInput name="address" model="mall" defaultValue={data.address} />
      <FormDescriptionInput name="description" model="mall" defaultValue={data.description} />
      <FormSelectShops name="shops_in_mall" model="mall" />
      <SubmitButton title="Update Mall" />
    </FormSubmit>
  );
};


const appBlock = document.getElementById('app-block');

ReactDOM.render(
  <EditMall
    data={JSON.parse(appBlock.dataset.json)}
    shops={JSON.parse(appBlock.dataset.shops)}
    shopsInMall={JSON.parse(appBlock.dataset.inmall)}
  />,
  appBlock,
);
