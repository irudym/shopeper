import React, { PropTypes } from 'react';
import FormSelectContainer from './form/form_select_container';
import FormButton from '../components/form/form_button';
import Table from '../components/table';

const viewStock = {
  marginTop: '2rem',
};

export default class ViewStock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mall: null,
      shop: {},
      records: [],
    };

    this.handleMallSelect = this.handleMallSelect.bind(this);
    this.handleShopSelect = this.handleShopSelect.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleRecordDelete = this.handleRecordDelete.bind(this);
    this.handleRecordClick = this.handleRecordClick.bind(this);
    this.resetSelect = null;
  }

  handleMallSelect(item) {
    this.setState({
      mall: item.value,
      shop: {},
    });
    if (this.resetSelect) this.resetSelect();
    // get list of shop in the selected mall data from API
    fetch(`/director/malls/${item.value.id}/shops.json?user_token=${this.props.userToken}`)
      .then(response => response.json())
      .then((shops) => {
        this.setState({
          shops,
        });
      });
  }

  handleShopSelect(item) {
    this.setState({
      shop: item.value,
    });
  }

  handleShow() {
    // get list of items of the shop in the mall from API
    fetch(`/director/stock/items.json?mall=${this.state.mall.id}&shop=${this.state.shop.id}&user_token=${this.props.userToken}`)
      .then(response => response.json())
      .then((records) => {
        this.setState({
          records,
        });
      });
  }

  handleRecordDelete(e, id) {
    e.preventDefault();
    e.stopPropagation();

    // send delete request
    fetch(`/director/stock/${id}`, {
      method: 'delete',
      headers: {
        'Content-type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'X-CSRF-Token': this.props.token,
      },
      credentials: 'same-origin',
    }).then((response) => {
      const records = this.state.records.filter(record => (
        record.id !== id
      ));
      this.setState({
        records,
      });
    });
  }

  handleRecordClick(e, id) {
    e.preventDefault();
    e.stopPropagation();
    window.location = `/director/stock/${id}/edit`;
  }

  render() {
    return (
      <div style={viewStock}>
        <div className="form-horizontal">
          <FormSelectContainer
            options={this.props.malls}
            name="malls"
            model="stock"
            onSelect={this.handleMallSelect}
          />
          <FormSelectContainer
            options={this.state.shops}
            name="shops"
            model="stock"
            onSelect={this.handleShopSelect}
            defaultValue={this.state.shop}
            onReset={func => (this.resetSelect = func)}
          />
          <FormButton
            onClick={this.handleShow}
            title="Show items"
          />
        </div>
        <div className="row">
          <div className="col-md-12">
            <Table
              header={['Item', 'Brand', 'Size', 'Color', 'Price', 'Quantity']}
              records={this.state.records}
              withDelete={true}
              onDelete={this.handleRecordDelete}
              onClick={this.handleRecordClick}
            />
          </div>
        </div>
      </div>
    );
  }
}

ViewStock.propTypes = {
  malls: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    value: PropTypes.string,
  })).isRequired,
  token: PropTypes.string.isRequired,
  userToken: PropTypes.string.isRequired,
};
