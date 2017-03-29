import React, { PropTypes } from 'react';

const FormButton = ({ title, type, name, onClick }) => (
  <div className="form-group">
    <div className="col-sm-offset-2 col-sm-4">
      <button
        className="button button-gray"
        type={type}
        name={name}
        onClick={onClick}
      >
        {title}
      </button>
    </div>
  </div>
);

FormButton.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func,
};

FormButton.defaultProps = {
  type: 'button',
  name: null,
  onClick: null,
};

export default FormButton;
