import React, { PropTypes } from 'react';

const SelectInput = ({ model, name, options, onChange }) => (
  <div className="form-group">
    <label className="control-label col-sm-2" htmlFor={model}>{name}</label>
    <div className="col-sm-4">
      <select
        className="selectpicker"
        dataLiveSearch="true"
        name={`${model}[${name}_id]`} id={`${model}_${name}_id`}
      >
        {options.map(item => (
          <option key={item.id} value={item.id}>{item.value}</option>
        ))}
      </select>
    </div>
  </div>
);

SelectInput.propTypes = {
  model: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    value: PropTypes.string,
  })).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SelectInput;
