import React, { PropTypes } from 'react';
import FormLabel from './form_label';

const FormNumberInput = ({ model, name, onChange, defaultValue }) => (
  <div className="form-group">
    <FormLabel name={name} htmlFor={`${model}_${name}`} />
    <div className="col-sm-4">
      <input
        className="form-control"
        name={`${model}[${name}]`}
        id={`${model}_${name}`}
        type="number"
        onChange={onChange}
        defaultValue={defaultValue}
      />
    </div>
  </div>
);

FormNumberInput.propTypes = {
  model: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  defaultValue: PropTypes.number,
};

FormNumberInput.defaultProps = {
  model: '',
  name: '',
  onChange: null,
  defaultValue: 0,
};

export default FormNumberInput;
