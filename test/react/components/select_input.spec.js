import React from 'react';
import { shallow } from 'enzyme';

import SelectInput from '../../../app/javascript/packs/components/select_input';

describe('Select Input component', () => {
  const options = [
    {
      id: 1,
      value: 'text1',
    },
    {
      id: 2,
      value: 'text2',
    },
    {
      id: 3,
      value: 'text3',
    },
  ];

  const onChange = () => {};

  it('puts values to select component', () => {
      const selectInput = shallow(
        <SelectInput model="test" name="image" options={options} onChange={onChange} />
      );
      expect(selectInput.find('option').length).toEqual(3);
  })
});
