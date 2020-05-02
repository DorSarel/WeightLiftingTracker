import React from 'react';
import ChangeInPercentage from '../ChangeInPercentage';
import moment from 'moment';
import PropTypes from 'prop-types';
import './style.scss';

const Table = ({ dataList }) => (
  <table className='table'>
    <thead>
      <tr className='table__row-heading'>
        <th>Date</th>
        <th>Weight (KG)</th>
        <th>Rounds</th>
        <th>Reps</th>
        <th>Change</th>
      </tr>
    </thead>
    <tbody>
      {(dataList || []).map((item, idx, arr) => (
        <tr key={item.createdAt} className='table__row'>
          <td>{moment(new Date(item.createdAt)).calendar()}</td>
          <td>{item.weight}</td>
          <td>{item.rounds}</td>
          <td>{item.reps}</td>
          <td>
            <ChangeInPercentage
              current={item.weight}
              previous={arr[idx + 1] ? arr[idx + 1].value : 0}
            />
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

Table.propTypes = {
  dataList: PropTypes.array.isRequired,
};

export default Table;
