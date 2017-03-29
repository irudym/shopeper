import React, { PropTypes } from 'react';
import FormButton from './form_button';

const SubmitButton = ({ title }) => (
  <FormButton type="submit" name="commit" title={title} />
);

SubmitButton.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SubmitButton;
