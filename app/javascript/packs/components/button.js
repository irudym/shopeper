import React, { PropTypes } from 'react';

const Button = ({ title, type, name, onClick }) => (
  <button
    className="button button-gray"
    type={type}
    name={name}
    onClick={onClick}
  >
    {title}
  </button>
);

Button.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: 'button',
  name: null,
  onClick: null,
};

export default Button;
