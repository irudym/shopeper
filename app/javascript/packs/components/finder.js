import React from 'react';
import PropTypes from 'prop-types';

import SearchField from '../components/search_field';
import SearchResult from '../components/search_result';
import Header from '../components/header';

const mainContainer = {
  background: '#F8F8F8',
  marginLeft: '25%',
  height: '100%',
  width: '50%',
};

const mainHeader = {
  top: '0',
  background: '#34495E',
  height: '15rem',
  fontFamily: 'Roboto',
  fontSize: '1.6rem',
  fontWeight: '200',
  color: '#fff',
  paddingTop: '4rem',
  textAlign: 'center',
  letterSpacing: '0.2rem',
  textTransform: 'uppercase',
};

const mainBody = {
  padding: '1rem',
  flexGrow: '1',
};

const withShadow = {
  boxShadow: '0px 2px 3px 2px rgba(0,0,0,0.05)',
};

const Finder = ({ onChange, onSearch, hint, results }) => (
  <div style={mainContainer}>
    <div style={mainHeader}>{'Shopeper'}</div>
    <div style={mainBody}>
      <div style={withShadow}>
        <Header>
          <SearchField
            onChange={onChange}
            onSearch={onSearch}
            hint={hint}
          />
        </Header>
        {results ? <SearchResult results={results} /> : ''}
      </div>
    </div>
  </div>
);

Finder.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  hint: PropTypes.string.isRequired,
  results: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    link: PropTypes.string,
    picture: PropTypes.string,
  })).isRequired,
};

export default Finder;
