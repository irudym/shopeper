import React from 'react';
import { shallow } from 'enzyme';

import NameInput from '../../../app/javascript/packs/components/name_input';

describe('Name Input component', () => {

  const onChange = () => {};

  it('renders input field', () => {
    const nameInput = shallow(
      <NameInput onChange={onChange} />
    );

    expect(nameInput.find('input').length).toEqual(1);
  });

  it('renders label', () => {
    const nameInput = shallow(
      <NameInput onChange={onChange} />
    );

    expect(nameInput.find('label').length).toEqual(1);
  });
});
