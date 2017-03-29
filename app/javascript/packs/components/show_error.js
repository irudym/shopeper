import React, { PropTypes } from 'react';

const ShowError = ({ text }) => (
  <div className="system-message system-error">
    <div className="row">
      <div className="col-sm-1 error-icon">
        <i className="fa fa-exclamation-circle fa-2x" />
      </div>
      <div className="col-sm-6">
        <h4>{'Error'}</h4>
        <p>
          <ul>
            <li>{text}</li>
          </ul>
        </p>
      </div>
    </div>
  </div>
);

ShowError.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ShowError;
