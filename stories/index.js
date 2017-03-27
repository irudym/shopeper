import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';

import Welcome from './Welcome';
import SelectInput from '../app/javascript/packs/components/select/select_input';

import SelectContainer from '../app/javascript/packs/containers/select/select_container.js';

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
    <SelectInput model="test" name="Name" options={options} onChange={action('changed')} expanded={true} />
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
