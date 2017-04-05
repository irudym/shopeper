import React, { PropTypes } from 'react';
import FormLabel from '../../components/form/form_label';
import SelectItemsContainer from '../select/select_items_container';

const FormSelectItemsContainer = props => (
  <div className="form-group">
    <FormLabel name={props.name.replace(/_/g, ' ')} />
    <SelectItemsContainer {...props} className="col-sm-4" />
  </div>
);

FormSelectItemsContainer.propTypes = {
  name: PropTypes.string.isRequired,
};

export default FormSelectItemsContainer;
