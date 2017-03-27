import React, { PropTypes } from 'react';

const NameInput = ({ onChange }) => (
  <div className="form-group">
    <label className="control-label col-sm-2" htmlFor="type">{'Name'}</label>
    <div className="col-sm-4">
      <input
        className="form-control"
        name="type[name]"
        id="type_name"
        type="text"
        onChange={onChange}
      />
    </div>
  </div>
);

NameInput.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default NameInput;
