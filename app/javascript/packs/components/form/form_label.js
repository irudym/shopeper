import React, { PropTypes } from 'react';
import Label from '../label';

const FormLabel = ({ name, htmlFor, children }) => (
  <div className="control-label col-sm-2">
    <Label name={name} htmlFor={htmlFor}>{children}</Label>
  </div>
);

FormLabel.propTypes = {
  name: PropTypes.string.isRequired,
  htmlFor: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};

FormLabel.defaultProps = {
  children: null,
  htmlFor: '',
};

export default FormLabel;
