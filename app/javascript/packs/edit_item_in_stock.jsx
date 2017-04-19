/**
 * Created by igor rudym on 18/04/2017
 */
import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import FormSubmit from './components/form_submit';
import FormSelectContainer from './containers/form/form_select_container';
import FormNumberInput from './components/form/form_number_input';
import SubmitButton from './components/submit_button';
import withData from './hocs/with_data';

const appBlock = document.getElementById('app-block');

const EditRecord = ({ items, sizes, colors, model, token, record }) => {

  const itemsDefault = items.reduce((res, item) => {
    if (item.id === record.item_id) return item;
    return res;
  }, {});

  const sizesDefault = sizes.reduce((res, size) => {
    if (size.id === record.size_id) return size;
    return res;
  }, {});

  const colorsDefault = colors.reduce((res, color) => {
    if (color.id === record.color_id) return color;
    return res;
  }, {});

  const SelectItems = withData(FormSelectContainer, items, itemsDefault);
  const SelectSizes = withData(FormSelectContainer, sizes, sizesDefault);
  const SelectColors = withData(FormSelectContainer, colors, colorsDefault);


  return (
    <FormSubmit
      id={`edit_item_in_stock_${record.id}`}
      action={`/director/stock/${record.id}`}
      token={token}
      // enctype="multipart/form-data"
      method="patch"
    >
      <SelectItems name="item" model={model} />
      <SelectSizes name="size" model={model} />
      <SelectColors name="color" model={model} />
      <FormNumberInput
        model={model}
        name="price"
        defaultValue={record.price}
      />
      <FormNumberInput
        model={model}
        name="quantity"
        defaultValue={record.quantity}
      />
      <SubmitButton title="Update record" />
    </FormSubmit>
  );
};

EditRecord.propTypes = {
  id: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
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
  name: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
  record: PropTypes.object.isRequired,
};


ReactDOM.render(
  <EditRecord
    model="item"
    name="records"
    action="/director/stock"
    token={$('meta[name=csrf-token]').attr('content')}
    items={JSON.parse(appBlock.dataset.items)}
    sizes={JSON.parse(appBlock.dataset.sizes)}
    colors={JSON.parse(appBlock.dataset.colors)}
    record={JSON.parse(appBlock.dataset.record)}
  />,
  document.getElementById('app-block'),
);
