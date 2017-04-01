import React, { PropTypes } from 'react';

const clearStyle = {
  width: '100%',
  background: '#fff',
};

const ClearButton = ({ onClick }) => (
  <button type="button" className="button" style={clearStyle} onClick={(e) => { e.stopPropagation(); e.preventDefault(); onClick(); }}>
    <i className="fa fa-times" />
    {' Clear'}
  </button>
);

ClearButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ClearButton;
