import React, { PropTypes } from 'react';

const plusStyle = {
  fontSize: '3rem',
  color: '#93969f',
  textAlign: 'center',
};

const pointerCursor = {
  cursor: 'pointer',
};

const ImagePicker = ({ name, size, image, onClick, model }) => (
  <div className={`col-sm-${size}`}>
    <input type="hidden" name={`${model}[${name}]`} />
    <input type="file" name={`${model}[${name}]_file`} id={`${model}_${name}_file`} />
    <div className="thumbnail" style={pointerCursor} onClick={onClick} >
      {
        image === '' ?
          <div style={plusStyle}><i className="fa fa-plus" ariaHidden="true" /></div>
          :
          <img src={image} alt={image} />
      }
    </div>
  </div>
);

ImagePicker.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  size: PropTypes.number,
  model: PropTypes.string.isRequired,
};

ImagePicker.defaultProps = {
  image: '',
  size: 3,
};

export default ImagePicker;
