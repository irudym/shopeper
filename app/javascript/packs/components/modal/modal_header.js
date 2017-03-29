import React, { PropTypes } from 'react';
import CloseButton from './close_button';
import { colors } from '../../styles/common_styles';

const headerStyle = {
};

const titleStyle = {
  borderBottom: `1px solid ${colors.gray}`,
  color: colors.colorBrown,
  paddingBottom: '1rem',
  marginBottom: '2rem',
};

const ModalHeader = ({ title, onClose }) => (
  <div style={headerStyle}>
    <h3 style={titleStyle}>{title}</h3>
    <CloseButton onClick={onClose} />
  </div>
);

ModalHeader.propTypes = {
  title: PropTypes.string,
  onClose: PropTypes.func,
};

ModalHeader.defaultProps = {
  title: '',
  onClose: null,
};

export default ModalHeader;
