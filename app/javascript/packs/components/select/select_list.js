import React, { PropTypes } from 'react';
import SelectOption from './select_option';


const listStyle = {
  maxHeight: '17rem',
  overflow: 'auto',
  border: '1px solid #D8DDE1',
  borderRadius: '0 0 3px 3px',
  position: 'absolute',
  backgroundColor: '#fff',
  zIndex: '3',
  margin: 0,
  padding: 0,
  top: 34,
  listStyle: 'none',
};

/**
 * Renders list of options
 */
const SelectList = ({ options, expanded, onSelect, filter }) => {
  if (expanded) {
    let filtered = options;
    if (filter !== '') {
      filtered = options.filter(item => (
        item.value.match(filter)
      ));
    }
    return (
      <ul style={listStyle} >
        {filtered.map(item => (
          <SelectOption key={item.id} value={item} onSelect={onSelect} />
        ))}
      </ul>
    );
  }
  return null;
};

SelectList.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    value: PropTypes.string,
  })).isRequired,
  expanded: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired,
  filter: PropTypes.string,
};

SelectList.defaultProps = {
  options: [],
  filter: '',
};


export default SelectList;
