import React, { PropTypes, Component } from 'react';

import SelectInput from '../../components/select/select_input';
import SelectList from '../../components/select/select_list';

class SelectContainer extends Component {
  constructor(props) {
    super(props);
    // set default value
    this.state = {
      expanded: false,
      option: this.props.defaultValue,
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
    // console.log('onSelect/onClick');
    if (this.props.onSelect !== null) {
      this.props.onSelect({
        component: this.props.name,
        value: item,
      });
    }
    this.setState({
      expanded: false,
      option: item,
      showOption: true,
      value: '',
      filter: '',
    });
  }

  render() {
    const { model, name, options, className } = this.props;
    return (
      <SelectInput
        model={model}
        name={name}
        expanded={this.state.expanded}
        onClick={this.handleExpand}
        onChange={this.handleChange}
        option={this.state.option}
        showOption={this.state.showOption}
        value={this.state.value}
        className={className}
      >
        { this.props.children }
        <SelectList
          expanded={this.state.expanded}
          options={options}
          onSelect={this.handleSelect}
          filter={this.state.filter}
        />
      </SelectInput>
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
  onSelect: PropTypes.func,
  defaultValue: PropTypes.shape({
    id: PropTypes.number,
    value: PropTypes.string,
  }),
  children: PropTypes.element,
  className: PropTypes.string,
};

SelectContainer.defaultProps = {
  onSelect: null,
  defaultValue: {},
  children: null,
  className: '',
};

export default SelectContainer;
