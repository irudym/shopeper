import React, { PropTypes } from 'react';
import ClearButton from './clear_button';

const plusStyle = {
  fontSize: '3rem',
  color: '#93969f',
  textAlign: 'center',
};

const pointerCursor = {
  cursor: 'pointer',
};


const inputFile = {
  width: '0.1px',
  height: '0.1px',
  opacity: 0,
  overflow: 'hidden',
  position: 'absolute',
  zIndex: -1,
};


const PicturePicker = ({ name, size, imageUrl, onClick, model, onChange, onClear, inputKey }) => (
  <div className={`col-xs-${size}`}>
    {imageUrl !== '' ? <ClearButton onClick={onClear} /> : ''}
    <input
      className="form-control"
      type="file"
      name={`${model}[${name}]`}
      id={`${model}_${name}`}
      style={inputFile}
      onChange={onChange}
      value={null}
      key={inputKey}
    />
    <label
      className="thumbnail"
      style={pointerCursor}
      onClick={onClick}
      htmlFor={`${model}_${name}`} // {externalId}
    >
      {
        imageUrl && imageUrl !== '' ?
          <img src={imageUrl} alt={imageUrl} />
          :
          <div style={plusStyle}><i className="fa fa-plus" /></div>
      }
    </label>
  </div>
);

PicturePicker.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.number,
  model: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
  inputKey: PropTypes.number.isRequired,
};

PicturePicker.defaultProps = {
  imageUrl: '',
  size: 3,
  onClick: null,
};

export default PicturePicker;
