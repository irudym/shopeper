import React, { PropTypes } from 'react';

const Label = ({ name, htmlFor, children }) => (
  <label className="control-label col-sm-2" htmlFor={htmlFor}>
    {children ? children : name.charAt(0).toUpperCase() + name.slice(1)}
  </label>
);

Label.propTypes = {
  name: PropTypes.string.isRequired,
  htmlFor: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};

Label.defaultProps = {
  children: null,
  htmlFor: '',
};

export default Label;
