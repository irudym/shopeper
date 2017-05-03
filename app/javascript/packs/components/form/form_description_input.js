import React, { PropTypes } from 'react';
import FormLabel from './form_label';

const FormDescriptionInput = ({ model, name, onChange, defaultValue, size, value }) => (
  <div className="form-group">
    <FormLabel name={name} htmlFor={`${model}_${name}`} />
    <div className={`col-sm-${size}`}>
      <textarea
        className="form-control"
        name={`${model}[${name}]`}
        id={`${model}_${name}`}
        type="text"
        onChange={onChange}
        defaultValue={defaultValue}
        value={value}
      />
    </div>
  </div>
);

FormDescriptionInput.propTypes = {
  model: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  defaultValue: PropTypes.string,
  size: PropTypes.number,
};

FormDescriptionInput.defaultProps = {
  model: '',
  name: '',
  onChange: null,
  defaultValue: '',
  size: 4,
};

export default FormDescriptionInput;
