import React, { PropTypes } from 'react';

const selectStyle = {
  boxSizing: 'border-box',
};

const selectArrowZone = {
  cursor: 'pointer',
  textAlign: 'center',
  verticalAlign: 'middle',
  whiteSpace: 'nowrap',
  zIndex: -1,
};

const selectOption = {
  position: 'absolute',
  top: 7,
  left: 28,
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
  zIndex: -1,
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


const SelectInput = ({ model, name, onChange, onClick, expanded, children, option, showOption, value }) => (
  <div className="form-group" style={selectStyle} >
    <label className="control-label col-sm-2" htmlFor={model}>{name}</label>
    <div className="col-sm-4">
      <input type="hidden" name="select-state" value="" />
      <span className="select-arrow-zone" style={selectArrowZone} onClick={onClick}>
        <span className="select-arrow" style={expanded ? selectArrowExpanded : selectArrow} />
      </span>
      <div className="select-input" >
        {option !== '' && showOption ?
          <span className="select-option" style={selectOption}>{option}</span>
          :
          ''
        }
        <input
          type="text"
          className="form-control"
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
  model: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  children: React.PropTypes.element.isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  expanded: PropTypes.bool.isRequired,
  option: PropTypes.string,
  showOption: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
};

SelectInput.defaultProps = {
  option: '',
};

export default SelectInput;
