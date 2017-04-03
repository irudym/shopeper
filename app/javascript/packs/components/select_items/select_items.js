import React, { PropTypes } from 'react';
import SelectContainer from '../../containers/select/select_container';
import Button from '../button';

const SelectItems = ({ options, onAdd, onSelect, onRemove, values, model, name }) => {
  return (
    <div>
      <input
        type="hidden"
        name={`${model}[${name}]`}
        id={`${model}_${name}`}
        value={values}
      />
      <div className="select-group">
        <SelectContainer
          model={model}
          name={`select_${name}`}
          options={options}
          onSelect={onSelect}
        />
        <Button
          className="col-sm-2"
          title="Add"
          onClick={onAdd}
        />
      </div>
    </div>
  );
};

SelectItems.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    value: PropTypes.string,
  })).isRequired,
  onAdd: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  values: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    value: PropTypes.string,
  })).isRequired,
  model: PropTypes.string,
  name: PropTypes.string,
};

SelectItems.defaultProps = {
  model: '',
  name: '',
};

export default SelectItems;
