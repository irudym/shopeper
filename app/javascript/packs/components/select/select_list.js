import React, { PropTypes } from 'react';
import SelectOption from './select_option';
import {colors} from '../../styles/common_styles';


const listStyle = {
  maxHeight: '17rem',
  overflow: 'auto',
  border: `1px solid ${colors.colorHighlight}`,
  borderRadius: '0 0 3px 3px',
  position: 'absolute',
  backgroundColor: '#fff',
  zIndex: 1,
  margin: 0,
  padding: 0,
  top: 34,
  listStyle: 'none',
  width: '100%',
  boxShadow: `0px 0px 3px 1px ${colors.colorHighlight}`,
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
