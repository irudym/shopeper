import React, { PropTypes } from 'react';
import DeleteButton from './delete_button';


const Table = ({ header, records, withDelete, onDelete, onClick }) => (
  <table className="table">
    <thead>
      <tr>
        {header.map(item => (
          <th>{item}</th>
        ))}
        {withDelete ?
          <th>Delete</th>
          :
          ''
        }
      </tr>
    </thead>
    <tbody>
      {records.map(record => (
        <tr key={record.id} className="with-row-select" onClick={e => onClick(e, record.id)} >
          {header.map(value => (
            <td>
              {record[value.toLowerCase()]}
            </td>
          ))}
          {withDelete ?
            <td>
              <DeleteButton
                onDelete={onDelete}
                id={record.id}
              />
            </td>
            :
            null
          }
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
  withDelete: PropTypes.bool.isRequired,
  onDelete: PropTypes.func,
  onClick: PropTypes.func,
};

Table.defaultProps = {
  records: [],
  onDelete: null,
  onClick: null,
};

export default Table;
