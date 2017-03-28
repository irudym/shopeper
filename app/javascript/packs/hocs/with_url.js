/**
 * Update components with json data
 */
import React, { Component } from 'react';
import 'whatwg-fetch';

const withUrl = (WrappedComponent, url) => (
  class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        options: [],
      };
    }

    componentDidMount() {
      fetch(url)
        .then(response => response.json())
        .then(data => {
          const options = data.map(item => (
            {
              id: item.id,
              value: item.name,
            }
          ));
          this.setState({ options });
        });
    }

    render() {
      return (
        <WrappedComponent {...this.props} options={this.state.options} />
      );
    }
  }
);

export default withUrl;
