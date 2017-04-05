import React, { PropTypes } from 'react';
import FormLabel from './form_label';

const FormDescriptionInput = ({ model, name, onChange, defaultValue }) => (
  <div className="form-group">
    <FormLabel name={name} htmlFor={`${model}_${name}`} />
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

FormDescriptionInput.propTypes = {
  model: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  defaultValue: PropTypes.string,
};

FormDescriptionInput.defaultProps = {
  model: '',
  name: '',
  onChange: null,
  defaultValue: '',
};

export default FormDescriptionInput;
