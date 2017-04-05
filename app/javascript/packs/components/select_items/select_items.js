import React, { PropTypes } from 'react';
import SelectContainer from '../../containers/select/select_container';
import Button from '../button';
import ItemList from './item_list';


const buttonStyle = {
  height: '34px',
  paddingTop: 0,
  paddingBottom: 0,
  fontWeight: 'bold',
  fontSize: '2rem',
};

const buttonGroup = {
  paddingLeft: 0,
  display: 'inline-block',
};


const SelectItems = ({ options, onAdd, onSelect, onRemove, values, model, name, className }) => (
  <div className={className}>
    <input
      type="hidden"
      name={`${model}[${name}]`}
      id={`${model}_${name}`}
      value={JSON.stringify(values.map(item => (
        item.id
      )))}
    />
    <div>
      <SelectContainer
        model={model}
        name="select"
        options={options}
        onSelect={onSelect}
        className="col-xs-10 relative"
      />
      <div style={buttonGroup} className="col-xs-2">
        <Button
          title="+"
          onClick={onAdd}
          style={buttonStyle}
        />
      </div>
      <ItemList onRemove={onRemove} items={values} className="col-xs-10 relative" />
    </div>
  </div>
);

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
  className: PropTypes.string,
};

SelectItems.defaultProps = {
  model: '',
  name: '',
  values: [],
  className: '',
};

export default SelectItems;
