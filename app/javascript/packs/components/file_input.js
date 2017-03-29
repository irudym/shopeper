import React, { PropTypes } from 'react';
import { colors } from '../styles/common_styles';
import Label from './label';

const fileLabel = {
  border: `1px solid ${colors.gray}`,
  borderRadius: 3,
  padding: '6px 12px',
  height: 34,
  width: '100%',
};

const inputFile = {
  width: '0.1px',
  height: '0.1px',
  opacity: 0,
  overflow: 'hidden',
  position: 'absolute',
  zIndex: -1,
};

const FileInput = ({ name, model, onChange, externalId }) => (
  <div className="form-group">
    <Label name={name} htmlFor={`${name}`}>Or upload</Label>
    <div className="col-sm-4">
      <input
        className="form-control"
        type="file"
        name={`${model}[${name}]`}
        id={`${model}_${name}`}
        onChange={onChange}
        style={inputFile}
      />
      <label htmlFor={externalId ? externalId : `${model}_${name}`} style={fileLabel} className="button button-gray">
        <i className="fa fa-upload" />
        {' '}
        Select a file
      </label>
    </div>
  </div>
);

FileInput.propTypes = {
  model: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  externalId: PropTypes.string,
};

FileInput.defaultProps = {
  model: '',
  name: '',
  onChange: null,
  externalId: null,
};

export default FileInput;
