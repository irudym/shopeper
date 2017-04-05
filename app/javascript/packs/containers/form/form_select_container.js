import React, { PropTypes } from 'react';
import FormLabel from '../../components/form/form_label';
import SelectContainer from '../select/select_container';

const FormSelectContainer = props => (
  <div className="form-group">
    <FormLabel name={props.name} />
    <SelectContainer {...props} className="col-sm-4" />
  </div>
);

FormSelectContainer.propTypes = {
  name: PropTypes.string.isRequired,
};

export default FormSelectContainer;
