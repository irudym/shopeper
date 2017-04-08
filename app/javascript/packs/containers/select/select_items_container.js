import React, { PropTypes } from 'react';
import SelectItems from '../../components/select_items/select_items';

class SelectItemsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedItem: {},
      values: this.props.defaultValue,
    };

    this.handleAdd = this.handleAdd.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleAdd() {
    if (this.state.selectedItem.value) {
      // add selected item to the list of values
      // check that there is no element with the same id!
      this.setState({
        values: [...this.state.values, this.state.selectedItem.value],
      });
    }
  }

  handleSelect(item) {
    this.setState({
      selectedItem: item,
    });
  }

  handleRemove(e, id) {
    e.preventDefault();
    // remove id from values
    const values = this.state.values.filter(item => (
      item.id !== id
    ));
    this.setState({
      values,
    });
  }

  render() {
    const { options, model, name, className } = this.props;
    return (
      <SelectItems
        options={options}
        onAdd={this.handleAdd}
        onSelect={this.handleSelect}
        onRemove={this.handleRemove}
        values={this.state.values}
        model={model}
        name={name}
        className={className}
      />
    );
  }
}

SelectItemsContainer.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    value: PropTypes.string,
  })).isRequired,
  defaultValue: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    value: PropTypes.string,
  })),
  model: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
};

SelectItemsContainer.defaultProps = {
  defaultValue: [],
  model: '',
  name: '',
  className: '',
};

export default SelectItemsContainer;
