import React from 'react';
import { shallow } from 'enzyme';

import ImagePicker from '../../../app/javascript/packs/components/image_picker';

describe('Image Picker component', () => {
  const onClick = (name) => {};

  it('renders a block with provided col size', () => {
    const imagePicker = shallow(
      <imagePicker onClick={onClick} size="3" name="image1" />
    );

    expect(imagePicker.find('.col-xs-3').length).toEqual(1);
  })

  it('renders sign + in case image is not provided', () => {
    const imagePicker = shallow(
      <imagePicker onClick={onClick} size="3" name="image1" />
    );

    console.log(imagePicker);

    expect(imagePicker.find('a').length).toEqual(1);
  });
});
