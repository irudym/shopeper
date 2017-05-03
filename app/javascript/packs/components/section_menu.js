import React, { PropTypes } from 'react';

const icon = {
  marginRight: '0.5rem',
};

const SectionMenu = ({ menu, onClick }) => (
  <ul className="section-menu">
    {
      menu.map(item => (
        <li key={item.id}>
          <button className="button button-gray" onClick={e => (onClick(e, item.id))}>
            {item.icon ? <i className={`fa fa-${item.icon}`} style={icon} /> : ''}
            {item.text}
          </button>
        </li>
      ))
    }
  </ul>
);

SectionMenu.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    icon: PropTypes.string,
  })).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SectionMenu;
