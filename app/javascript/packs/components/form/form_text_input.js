import React, { PropTypes } from 'react';
import FormLabel from './form_label';

const FormTextInput = ({ model, name, onChange, defaultValue }) => (
  <div className="form-group">
    <FormLabel name={name} htmlFor={`${model}_${name}`} />
    <div className="col-sm-4">
      <input
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

FormTextInput.propTypes = {
  model: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  defaultValue: PropTypes.string,
};

FormTextInput.defaultProps = {
  model: '',
  name: '',
  onChange: null,
  defaultValue: '',
};

export default FormTextInput;
