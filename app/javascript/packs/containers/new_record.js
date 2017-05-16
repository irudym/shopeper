import React, { PropTypes } from 'react';
import FormSelectContainer from './form/form_select_container';
import FormButton from '../components/form/form_button';
import AddRecord from '../components/add_record';


export default class NewRecord extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      shops: [],
      shop: null,
      mall: null,
      isAddRecordVisible: false,
      title: '',
      item: null,
      size: null,
      color: null,
      records: [],
      record_id: 0,
      qty: 0,
      price: 0,
      additions: {},
    };

    this.handleProceed = this.handleProceed.bind(this);
    this.handleMallSelect = this.handleMallSelect.bind(this);
    this.handleShopSelect = this.handleShopSelect.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
    this.handleAddRecord = this.handleAddRecord.bind(this);
    this.handleItemSelect = this.handleItemSelect.bind(this);
    this.handleColorSelect = this.handleColorSelect.bind(this);
    this.handleSizeSelect = this.handleSizeSelect.bind(this);
    this.handleRecordRemove = this.handleRecordRemove.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.handleQtyChange = this.handleQtyChange.bind(this);
  }

  handleProceed(e) {
    e.preventDefault();
    // check if an user slecelted shop and mall
    if (this.state.shop != null && this.state.mall != null) {
      // make add record modal window visilble
      this.setState({
        isAddRecordVisible: true,
        title: `${this.state.shop.value} at ${this.state.mall.value}`,
        records: [],
      });
    }
  }

  handleMallSelect(item) {
    this.setState({
      mall: item.value,
    });
    // get list of shop in the selected mall data from API
    fetch(`/director/malls/${item.value.id}/shops.json?user_token=${this.props.userToken}`)
      .then(response => response.json())
      .then((shops) => {
        this.setState({
          shops,
          additions: {
            ...this.state.additions,
            mall: item.value,
          },
        });
      });
  }

  handleShopSelect(item) {
    this.setState({
      shop: item.value,
      additions: {
        ...this.state.additions,
        shop: item.value,
      },
    });
  }

  handleModalClose() {
    this.setState({
      isAddRecordVisible: false,
    });
  }

  handleItemSelect(value) {
    this.setState({
      item: value.value,
    });
  }

  handleSizeSelect(value) {
    this.setState({
      size: value.value,
    });
  }

  handleColorSelect(value) {
    this.setState({
      color: value.value,
    });
  }

  handlePriceChange(value) {
    this.setState({
      price: value.target.value,
    });
  }

  handleQtyChange(value) {
    this.setState({
      qty: value.target.value,
    });
  }

  handleAddRecord() {
    const { item, color, size } = this.state;
    const price = { id: 0, value: this.state.qty };
    const qty = { id: 0, value: this.state.price };
    const record = {
      id: this.state.record_id,
      values: [item, color, size, qty, price],
    };
    this.setState({
      records: [...this.state.records, record],
      record_id: this.state.record_id + 1,
    });
  }

  handleRecordRemove(e, id) {
    e.preventDefault();
    const records = this.state.records.filter(item => (
      item.id !== id
    ));
    this.setState({
      records,
    });
  }

  render() {
    const { model, name, token, action } = this.props;
    return (
      <div className="form-horizontal">
        <FormSelectContainer
          options={this.props.malls}
          name="malls"
          model={model}
          onSelect={this.handleMallSelect}
        />
        <FormSelectContainer
          options={this.state.shops}
          name="shops"
          model={model}
          onSelect={this.handleShopSelect}
        />
        <FormButton
          onClick={this.handleProceed}
          title="Proceed"
        />
        <AddRecord
          title={this.state.title}
          isOpen={this.state.isAddRecordVisible}
          onClose={this.handleModalClose}
          items={this.props.items}
          sizes={this.props.sizes}
          colors={this.props.colors}
          onItemSelect={this.handleItemSelect}
          onSizeSelect={this.handleSizeSelect}
          onColorSelect={this.handleColorSelect}
          onPriceChange={this.handlePriceChange}
          onQuantityChange={this.handleQtyChange}
          onAdd={this.handleAddRecord}
          records={this.state.records}
          onRemove={this.handleRecordRemove}
          token={token}
          action={action}
          id={`${model}_id`}
          model={model}
          name={name}
          additionalParams={this.state.additions}
        />
      </div>
    );
  }
}

NewRecord.propTypes = {
  malls: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    value: PropTypes.string,
  })).isRequired,
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
  model: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
  userToken: PropTypes.string.isRequired,
  action: PropTypes.string.isRequired,
};
