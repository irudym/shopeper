/**
 * Created by igor rudym on 25/03/2017.
 */
import React from 'react';
import ReactDOM from 'react-dom';

import NameInput from './components/name_input';
import SelectInput from './components/select_input';
import ImagePickerGroup from './containers/image_picker_group';

const options = [];
const onClick = (name) => {}

const NewItem = () => (
    <form className="form-horizontal" role="form">
      <NameInput />
      <SelectInput options={options} />
      <ImagePickerGroup names={['img1', 'img2', 'img3']} onClick={onClick}/>
    </form>
);

ReactDOM.render(
    <NewItem />,
    document.getElementById('app-block'),
);
