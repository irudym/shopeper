import React, { PropTypes, Component } from 'react';

import SelectInput from '../../components/select/select_input';
import SelectList from '../../components/select/select_list';

class SelectContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false,
      option: '',
      previouse: '',
      filter: '',
      showOption: true,
      value: '',
    };
    this.handleExpand = this.handleExpand.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleExpand() {
    this.setState({
      expanded: !this.state.expanded,
      showOption: true,
      value: '',
      filter: '',
    });
  }

  handleChange(e) {
    this.setState({
      showOption: false,
      filter: e.target.value,
      value: e.target.value,
    });
  }

  handleSelect(item) {
    console.log('onSelect/onClick');
    this.setState({
      expanded: false,
      option: item.value,
      showOption: true,
      value: '',
      filter: '',
    });
  }

  render() {
    const { model, name, options } = this.props;
    return (
      <div>
        <SelectInput
          model={model}
          name={name}
          expanded={this.state.expanded}
          onClick={this.handleExpand}
          onChange={this.handleChange}
          option={this.state.option}
          showOption={this.state.showOption}
          value={this.state.value}
        >
          <SelectList
            expanded={this.state.expanded}
            options={options}
            onSelect={this.handleSelect}
            filter={this.state.filter}
          />
        </SelectInput>
      </div>
    );
  }
}

SelectContainer.propTypes = {
  model: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    value: PropTypes.string,
  })).isRequired,
};

export default SelectContainer;
