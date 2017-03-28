import React, { PropTypes } from 'react';

const SubmitButton = ({ title }) => (
  <div className="form-group">
    <div className="col-sm-offset-2 col-sm-4">
      <button className="button button-gray">{title}</button>
    </div>
  </div>
);

SubmitButton.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SubmitButton;
