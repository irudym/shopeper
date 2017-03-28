/**
 * Created by igor rudym on 25/03/2017.
 */
import React from 'react';
import ReactDOM from 'react-dom';

import NameInput from './components/name_input';
import ImagePickerGroup from './containers/image_picker_group';
import SelectWithUrl from './hocs/select_with_url';
import SubmitButton from './components/submit_button';

const onClick = (name) => {}

const SelectTypes = SelectWithUrl('/director/types.json');
const SelectBrands = SelectWithUrl('/director/brands.json');

const NewItem = () => (
  <form className="form-horizontal" role="form">
    <NameInput />
    <SelectTypes name="Type" model="type" />
    <SelectBrands name="Brand" model="brand" />
    <ImagePickerGroup names={['img1', 'img2', 'img3']} onClick={onClick} />
    <SubmitButton title="Add Item" />
  </form>
);

ReactDOM.render(
    <NewItem />,
    document.getElementById('app-block'),
);
