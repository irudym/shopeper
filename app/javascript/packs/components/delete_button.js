import React, { PropTypes } from 'react';

const deleteButton = {
  border: 'none',
  background: 'none',
  color: '#337ab7',
};

const DeleteButton = ({ onDelete, id }) => (
  <button style={deleteButton} onClick={e => (onDelete(e, id))}>
    <i className="fa fa-trash" />
  </button>
);


DeleteButton.propTypes = {
  onDelete: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default DeleteButton;
