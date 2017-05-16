import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Finder from '../components/finder';
import { setResults } from '../redux/actions';

class FinderContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      request: '',
    };
    this.handleOnSearch = this.handleOnSearch.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnSearch() {
    // TODO: validate the request

    this.props.setResults([{ item: 'ищем...' }]);

    fetch(`/search.json?q=${this.state.request}`)
      .then(response => response.json())
      .then((results) => {
        // console.log("RSLT: ", results);
        this.props.setResults(results.result);
      });
  }

  handleOnChange(value) {
    this.setState({
      request: value.target.value,
    });
  }

  render() {
    return (
      <Finder
        onChange={this.handleOnChange}
        onSearch={this.handleOnSearch}
        hint="Где найти красные труселя?"
        results={this.props.results}
      />
    );
  }
}

FinderContainer.propTypes = {
  setResults: PropTypes.func.isRequired,
  results: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    link: PropTypes.string,
    picture: PropTypes.string,
  })).isRequired,
};

const mapStateToProps = (state) => ({
  results: state.results,
});

const mapDispatchToProps = (dispatch) => ({
  setResults: results => dispatch(setResults(results)),
});


export default connect(mapStateToProps, mapDispatchToProps)(FinderContainer);
