import React, { PropTypes } from 'react';
import Label from '../label';

const selectStyle = {
  boxSizing: 'border-box',
};

const selectArrowZone = {
  cursor: 'pointer',
  textAlign: 'center',
  verticalAlign: 'middle',
  whiteSpace: 'nowrap',
};

const selectOption = {
  position: 'absolute',
  top: 7,
  left: 13,
  fontWeight: 'normal',
  WebkitUserSelect: 'none', /* Chrome/Safari */
  MozUserSelect: 'none', /* Firefox */
  msUserSelect: 'none', /* IE10+ */
};

const selectArrow = {
  borderColor: '#999 transparent transparent',
  borderStyle: 'solid',
  borderBottomStyle: 0,
  borderWidth: '7px 7px 2.5px',
  display: 'inline-block',
  position: 'absolute',
  top: '50%',
  right: 25,
};

const selectArrowExpanded = {
  borderColor: 'transparent transparent #999',
  borderStyle: 'solid',
  borderBottomStyle: 'solid',
  borderWidth: '0px 7px 7px',
  display: 'inline-block',
  position: 'absolute',
  top: '50%',
  right: 25,
};

const inputStyle = {
  backgroundColor: 'transparent',
};

const selectInput = {
  position: 'relative',
};


const SelectInput = ({ model, name, onChange, onClick, expanded, children, option, showOption, value }) => (
  <div className="form-group" style={selectStyle} >
    <Label name={name} />
    <div className="col-sm-4">
      <input
        type="hidden"
        name={`${model}[${name}]`}
        id={`${model}_${name}`}
        value={option.id}
      />
      <span className="select-arrow-zone" style={selectArrowZone}>
        <label
          htmlFor={expanded ? ' ' : `${model}_${name}_select`}
          className="select-arrow"
          style={expanded ? selectArrowExpanded : selectArrow}
          onMouseDown={(e) => {
            if (expanded) {
              e.stopPropagation();
              e.preventDefault();
            }
          }}
        />
      </span>
      <div className="select-input" style={selectInput}>
        {option.value !== '' && showOption ?
          <label htmlFor={`${model}_${name}_select`} className="select-option" style={selectOption}>{option.value}</label>
          :
          ''
        }
        <input
          id={`${model}_${name}_select`}
          type="text"
          className="form-control select-focus"
          onClick={
            expanded ?
              null
              :
              onClick
          }
          onBlur={
            expanded ?
              onClick
              :
              null
          }
          onChange={onChange}
          style={inputStyle}
          value={value}
        />
        {children}
      </div>
    </div>
  </div>
);

SelectInput.propTypes = {
  model: PropTypes.string,
  name: PropTypes.string.isRequired,
  children: React.PropTypes.element.isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  expanded: PropTypes.bool.isRequired,
  option: PropTypes.shape({
    id: PropTypes.number,
    value: PropTypes.string,
  }),
  showOption: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
};

SelectInput.defaultProps = {
  option: {
    id: -1,
    value: '',
  },
  model: '',
};

export default SelectInput;
