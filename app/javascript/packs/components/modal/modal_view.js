import React, { PropTypes } from 'react';
import ReactModal from 'react-modal';
import ModalHeader from './modal_header';

const ModalView = ({ title, onClose, isOpen, contentLabel, children }) => (
  <ReactModal
    isOpen={isOpen}
    contentLabel={contentLabel}
  >
    <ModalHeader title={title} onClose={onClose} />
    <div className="container-fluid">
      {children}
    </div>
  </ReactModal>
);

ModalView.propTypes = {
  title: PropTypes.string,
  onClose: PropTypes.func,
  isOpen: PropTypes.bool,
  contentLabel: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};

ModalView.defaultProps = {
  title: '',
  onClose: null,
  isOpen: true,
  contentLabel: '',
  children: null,
};

export default ModalView;
