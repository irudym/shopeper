import React from 'react';
import PropTypes from 'prop-types';

const searchResult = {
  background: 'white',
  padding: '5px',
};

const resultHeader = {
  fontFamily: 'Roboto',
  color: '#9E9E9E',
  fontWeight: '200',
}

const resultBlock = {
  paddingLeft: '1rem',
  fontSize: '0.8rem',
};

const record = {
  fontWeight: 'light',
  marginBottom: '1.5rem',
};

const SearchResult = ({ results }) => (
  <div style={searchResult}>
    {results.length === 0 ?
      <h4 style={resultHeader}>ничего не нашли</h4>
      :
      <h4 style={resultHeader}>Вот, что нашли:</h4>
    }
    <div style={resultBlock}>
      {results.map(item => (
        <div style={record} key={item.id}>
          {`${item.item} есть в ${item.shop}, который в ${item.mall}, присутствует размер ${item.size}`}
        </div>
      ))}
    </div>
  </div>
);

SearchResult.propTypes = {
  results: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    link: PropTypes.string,
    picture: PropTypes.string,
  })).isRequired,
};

export default SearchResult;
