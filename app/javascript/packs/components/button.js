import React, { PropTypes } from 'react';

const Button = ({ children, title, type, name, onClick, style }) => (
  <button
    className="button button-gray"
    type={type}
    name={name}
    onClick={onClick}
    style={style}
  >
    {children ? children : title}
  </button>
);

Button.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func,
  style: PropTypes.object,
  children: PropTypes.element,
};

Button.defaultProps = {
  type: 'button',
  name: null,
  onClick: null,
  style: null,
  children: null,
};

export default Button;
