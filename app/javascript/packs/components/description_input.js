import React, { PropTypes } from 'react';
import Label from './label';

const DescriptionInput = ({ model, name, onChange, defaultValue }) => (
  <div className="form-group">
    <Label name={name} htmlFor={`${model}_${name}`} />
    <div className="col-sm-4">
      <textarea
        className="form-control"
        name={`${model}[${name}]`}
        id={`${model}_${name}`}
        type="text"
        onChange={onChange}
        defaultValue={defaultValue}
      />
    </div>
  </div>
);

DescriptionInput.propTypes = {
  model: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  defaultValue: PropTypes.string,
};

DescriptionInput.defaultProps = {
  model: '',
  name: '',
  onChange: null,
  defaultValue: '',
};

export default DescriptionInput;
