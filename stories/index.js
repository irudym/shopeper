import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';

import Welcome from './Welcome';
import SelectInput from '../app/javascript/packs/components/select/select_input';
import SelectList from '../app/javascript/packs/components/select/select_list';
import SelectContainer from '../app/javascript/packs/containers/select/select_container';
import ModalHeader from '../app/javascript/packs/components/modal/modal_header';
import ImagePickerGroup from '../app/javascript/packs/containers/image_picker_group';
import FileInput from '../app/javascript/packs/components/file_input';
import SelectItems from '../app/javascript/packs/components/select_items';

// import bootstrap scss
import './styles/bootstrap.min.css';
// import '../app/assets/stylesheets/director.scss';

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')} />
  ));

const options = [
  {
    id: 100,
    value: 'options',
  },
  {
    id: 101,
    value: 'hello',
  },
  {
    id: 102,
    value: 'hello world',
  },
];

storiesOf('Select Input', module)
  .add('with 3 options and closed', () => (
    <SelectInput model="test" name="Name" options={options} onChange={action('changed')} expanded={false} />
  ))
  .add('with 3 options and expanded', () => (
    <SelectInput model="test" name="Name" options={options} onChange={action('changed')} expanded={true}>
      <SelectList
        expanded={true}
        options={options}
        onSelect={action('onSelect')}
        filter={''}
      />
    </SelectInput>
  ));

storiesOf('Select Container', module)
  .add('with 3 options', () => (
    <div>
      <div className="row">
    <SelectContainer model="test" name="Name" options={options} />
  </div>
  <div className="row">
    <SelectContainer model="test" name="Name" options={options} />
  </div></div>
  ));

storiesOf('ModalView Header', module)
  .add('with title', () => (
    <ModalHeader title="Test modal" />
  ));

storiesOf('ImagePicker', module)
.add('with three images', () => (
  <ImagePickerGroup names={['img1', 'img2', 'img3']} />
));

storiesOf('FileInput', module)
  .add('with name', () => (
    <FileInput name="picture" model="item" />
  ));

storiesOf("SelectItems", module)
    .add('with items', () => (
      <SelectItems options={options} onAdd={action('Items Add')} onClick={action('Items click')} />
    ));
