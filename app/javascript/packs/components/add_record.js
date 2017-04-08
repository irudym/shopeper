import React, { PropTypes } from 'react';
import ModalView from './modal/modal_view';
import FormSubmit from './form_submit';
import FormButton from './form/form_button';
import FormSelectContainer from '../containers/form/form_select_container';

const AddRecord = ({ title, onClose, isOpen, items, sizes, colors, onItemSelect, onSizeSelect, onColorSelect }) => (
  <ModalView
    title={`Add record to ${title}`}
    onClose={onClose}
    isOpen={isOpen}
    contentLabel="add record form"
  >
    <FormSubmit>
      <FormSelectContainer
        options={items}
        name="item"
        onSelect={onItemSelect}
      />
      <FormSelectContainer
        options={sizes}
        name="size"
        onSelect={onSizeSelect}
      />
      <FormSelectContainer
        options={colors}
        name="Color"
        onSelect={onColorSelect}
      />
      <FormButton title="Add record" />
    </FormSubmit>
  </ModalView>
);


AddRecord.propTypes = {
  title: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    value: PropTypes.string,
  })).isRequired,
  sizes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    value: PropTypes.string,
  })).isRequired,
  colors: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    value: PropTypes.string,
  })).isRequired,
  onItemSelect: PropTypes.func.isRequired,
  onSizeSelect: PropTypes.func.isRequired,
  onColorSelect: PropTypes.func.isRequired,
};

export default AddRecord;
