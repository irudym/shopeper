import React, { PropTypes } from 'react';
import ModalView from './modal/modal_view';
import FormSubmit from './form_submit';
import FormButton from './form/form_button';
import SubmitButton from './submit_button';
import FormSelectContainer from '../containers/form/form_select_container';
import ExtendedItemList from './select_items/extended_item_list';
import FormNumberInput from './form/form_number_input';

const AddRecord = ({ title, onClose, isOpen, items, sizes, colors, onItemSelect,
  onSizeSelect, onColorSelect, records, onRemove, onAdd, token, action, id, model, name,
  additionalParams, onPriceChange, onQuantityChange }) => (
    <ModalView
      title={`Add record to ${title}`}
      onClose={onClose}
      isOpen={isOpen}
      contentLabel="add record form"
    >
      <FormSubmit
        id={id}
        action={action}
        token={token}
      >
        <input
          type="hidden"
          name={`${model}[${name}]`}
          id={`${model}_${name}_id`}
          value={JSON.stringify(records)}
        />
        {additionalParams ?
          <input
            type="hidden"
            name={`${model}[additions]`}
            id={`${model}_additions_id`}
            value={JSON.stringify(additionalParams)}
          />
          :
          ''
        }
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
        <FormNumberInput
          model={model}
          name="price"
          onChange={onPriceChange}
          defaultValue="0"
        />
        <FormNumberInput
          model={model}
          name="quantity"
          onChange={onQuantityChange}
          defaultValue="0"
        />
        <FormButton title="Add record" onClick={onAdd} />
        <SubmitButton title="Submit" />
        <div className="form-group">
          <ExtendedItemList
            items={records}
            className="col-sm-8 col-sm-offset-2"
            onRemove={onRemove}
            header={['item', 'color', 'size', 'price', 'quantity']}
          />
        </div>
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
  records: PropTypes.arrayOf(PropTypes.object),
  onRemove: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
  token: PropTypes.string.isRequired,
  action: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  additionalParams: PropTypes.object,
  onPriceChange: PropTypes.func.isRequired,
  onQuantityChange: PropTypes.func.isRequired,
};

AddRecord.defaultProps = {
  records: [],
  additionalParams: null,
};

export default AddRecord;
