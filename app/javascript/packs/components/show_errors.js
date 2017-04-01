import React, { PropTypes } from 'react';

const ShowErrors = ({ errors }) => (
  <div className="system-message system-error">
    <div className="row">
      <div className="col-sm-2 error-icon">
        <i className="fa fa-exclamation-circle fa-2x" />
      </div>
      <div className="col-sm-6">
        <h4>{'Error'}</h4>
        <ul>
          { errors.map(item => (
            <li>{item}</li>
          )) }
        </ul>
      </div>
    </div>
  </div>
);

ShowErrors.propTypes = {
  errors: PropTypes.arrayOf(PropTypes.tring).isRequired,
};

export default ShowErrors;
