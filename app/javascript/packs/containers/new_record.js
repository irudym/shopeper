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
    };

    this.handleProceed = this.handleProceed.bind(this);
    this.handleMallSelect = this.handleMallSelect.bind(this);
    this.handleShopSelect = this.handleShopSelect.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
  }

  handleProceed(e) {
    e.preventDefault();
    // check if an user slecelted shop and mall
    if (this.state.shop != null && this.state.mall != null) {
      // make add record modal window visilble
      this.setState({
        isAddRecordVisible: true,
        title: `${this.state.shop.value} at ${this.state.mall.value}`,
      });
    }
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

  handleModalClose() {
    this.setState({
      isAddRecordVisible: false,
    });
  }

  render() {
    return (
      <div
        className="form-horizontal"
      >
        <FormSelectContainer
          options={this.props.malls}
          name="malls"
          onSelect={this.handleMallSelect}
        />
        <FormSelectContainer
          options={this.state.shops}
          name="shops"
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
};
