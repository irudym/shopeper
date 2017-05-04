/**
 * Update components with json data
 */
import React, { Component, PropTypes } from 'react';
import 'whatwg-fetch';

const withUrl = (WrappedComponent, url, token) => (
  class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        options: [],
      };
    }

    componentDidMount() {
      fetch(url+`?user_token=${token}`, {
        method: 'GET',
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
          'X-CSRF-Token': token,
        },
      })
        .then(response => response.json())
        .then((data) => {
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
