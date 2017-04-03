import React, { PropTypes } from 'react';
import Button from './button';

const FormButton = props => (
  <div className="form-group">
    <div className="col-sm-offset-2 col-sm-4">
      <Button {...props} />
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
