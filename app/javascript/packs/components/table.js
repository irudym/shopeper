import React, { PropTypes } from 'react';

const Table = ({ header, records }) => (
  <table className="table">
    <thead>
      <tr>
        {header.map(item => (
          <th>{item}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {records.map(record => (
        <tr key={record.id}>
          {record.values.map(value => (
            <td>
              {value}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);


Table.propTypes = {
  header: PropTypes.arrayOf(PropTypes.string).isRequired,
  records: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    values: PropTypes.arrayOf(PropTypes.string),
  })),
};

Table.defaultProps = {
  records: [],
};

export default Table;
