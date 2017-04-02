/**
 * Created by igor rudym on 01/04/2017. (dd/mm/year)
 */
import React from 'react';
import ReactDOM from 'react-dom';

import TextInput from './components/text_input';
import SubmitButton from './components/submit_button';
import FormSubmit from './components/form_submit';
import DescriptionInput from './components/description_input';


const EditMall = ({ data }) => {

  return (
    <FormSubmit
      id={`edit_mall_${data.id}`}
      action={`/director/malls/${data.id}`}
      token={$('meta[name=csrf-token]').attr('content')}
      method="patch"
    >
      <TextInput name="name" model="mall" defaultValue={data.name} />
      <TextInput name="address" model="mall" defaultValue={data.address} />
      <DescriptionInput name="description" model="mall" defaultValue={data.description} />
      <SubmitButton title="Update Mall" />
    </FormSubmit>
  );
};


const appBlock = document.getElementById('app-block');

ReactDOM.render(
  <EditMall
    data={JSON.parse(appBlock.dataset.json)}
  />,
  appBlock,
);
