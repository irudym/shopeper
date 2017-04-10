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
      shop: null,
      records: [],
    };

    this.handleMallSelect = this.handleMallSelect.bind(this);
    this.handleShopSelect = this.handleShopSelect.bind(this);
    this.handleShow = this.handleShow.bind(this);
  }

  handleMallSelect(item) {
    this.setState({
      mall: item.value,
    });
    // get list of shop in the selected mall data from API
    fetch(`/director/malls/${item.value.id}/shops.json`)
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
    // load data from API
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
          />
          <FormButton
            onClick={this.handleShow}
            title="Show items"
          />
        </div>
        <div className="row">
          <div className="col-md-12">
            <Table
              header={['item', 'brand', 'size', 'color', 'price', 'quantity']}
              records={this.state.records}
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
};
