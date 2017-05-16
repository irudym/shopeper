import React, { PropTypes } from 'react';

const optionStyle = {
  cursor: 'pointer',
  padding: '6px 12px',
};

const SelectOption = ({ value, onSelect }) => (
  <li className="menu-hover" style={optionStyle} onMouseDown={(e) => { e.preventDefault(); e.stopPropagation(); onSelect(value);}}>
    {value.value}
  </li>
);

SelectOption.propTypes = {
  value: PropTypes.shape({
    id: PropTypes.number,
    value: PropTypes.string,
  }).isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default SelectOption;
