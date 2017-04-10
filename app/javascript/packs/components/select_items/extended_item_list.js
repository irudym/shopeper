import React, { PropTypes } from 'react';

import { colors } from '../../styles/common_styles';

const listBox = {
  borderRadius: 3,
  border: `1px solid ${colors.gray}`,
  minHeight: '5rem',
  maxHeight: '17rem',
  overflow: 'auto',
  listStyle: 'none',
  margin: 0,
  padding: 0,
  marginTop: '1rem',
};

const listItem = {
  height: '3.5rem',
  verticalAlign: 'middle',
  paddingTop: '0.8rem',
};

const removeButton = {
  border: 'none',
  margin: '0 5px',
  fontWeight: 'bold',
  fontSize: '1.3rem',
};

const itemLine = {
  display: 'inline-block',
  paddingRight: '2rem',
  verticalAlign: 'middle',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
};

const headerLine = {
  display: 'inline-block',
  fontWeight: 'bold',
  paddingLeft: '3rem',
};

const ExtendedItemList = ({ items, onRemove, className, header }) => (
  <div className={className}>
    {header ?
      header.map(item => (
        <div style={{ ...headerLine, width: `${90 / header.length}%` }}>
          {item}
        </div>
      ))
      :
      ''
    }
    <ul style={listBox}>
      {items.map(item => (
        <div key={item.id} className="menu-hover">
          <li key={item.id} style={listItem} className="hidden-button">
            <button onClick={e => onRemove(e, item.id)} style={removeButton} className="hidden-btn"><i className="fa fa-times" /></button>
            {item.image ?
              <img url={item.image} alt={item.image} />
              :
              ''
            }
            {item.values.map(value => (
              <div style={Object.assign(itemLine, { width: `${90 / item.values.length}%` })}>
                {value.value}
              </div>
            ))}
          </li>
        </div>
      ))}
    </ul>
  </div>
);

ExtendedItemList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    values: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      value: PropTypes.string,
    })),
    image: PropTypes.string,
  })).isRequired,
  onRemove: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  header: PropTypes.arrayOf(PropTypes.string),
};

ExtendedItemList.defaultProps = {
  header: null,
};

export default ExtendedItemList;
