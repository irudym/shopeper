import React from 'react';
import PropTypes from 'prop-types';
// import { colors } from '../styles/common_styles';

const headerStyle = {
  marginTop: '-7rem',
  //background: 'linear-gradient(-45deg,#4C8DB2,#84C6EC, #61BFE9)',
  borderBottom: '2px solid rgb(248, 248, 248)',
  background: 'white',
  padding: '1rem',
  borderTopLeftRadius: '7px',
  borderTopRightRadius: '7px',
};

const Header = ({ children }) => (
  <div style={headerStyle}>
    {children}
  </div>
);

Header.propTypes = {
  children: PropTypes.object,
};

export default Header;
