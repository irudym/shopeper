import React from 'react';
import PropTypes from 'prop-types';
// import { colors } from '../styles/common_styles';
// import searchStyle from '../styles/search.css';


const formStyle = {
  // background: colors.lightBlue,
  padding: '15px',
};


const searchHint = {
  fontSize: '0.9rem',
  fontWeight: '200',
  marginTop: '15px',
};

const SearchField = ({ onChange, onSearch, hint }) => (
  <div style={formStyle}>
    <form
      action=""
      className="search-form"
      onSubmit={(e) => { e.preventDefault(); onSearch(e); }}
    >
      <input
        type="search"
        name="search"
        placeholder="Search..."
        onChange={onChange}
      />
      <button className="icon">
        <i className="fa fa-search" />
      </button>
      <div style={searchHint}>
        <b>например:</b> {hint}
      </div>
    </form>
  </div>
);

SearchField.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  hint: PropTypes.string.isRequired,
};

export default SearchField;
