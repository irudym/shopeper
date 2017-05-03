import React, { PropTypes } from 'react';

const closeButtonStyle = {
  position: 'fixed',
  top: 48,
  right: 64,
  width: '2rem',
  height: '2rem',
  padding: 0,
};

const CloseButton = ({ onClick }) => (
  <button className="button button-gray" style={closeButtonStyle} onClick={onClick}>
    <i className="fa fa-times" />
  </button>
);

CloseButton.propTypes = {
  onClick: PropTypes.func,
};

CloseButton.defaultProps = {
  onClick: null,
};

export default CloseButton;
