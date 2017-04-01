/**
 * Load components with json data
 */
import React, { Component, PropTypes } from 'react';

const withData = (WrappedComponent, data, defaultValue) => (
  class extends Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <WrappedComponent {...this.props} options={data} defaultValue={defaultValue} />
      );
    }
  }
);

export default withData;
