import React from 'react';
import ChangeInPercentage from '../ChangeInPercentage';

const Table = ({ dataList }) => (
  <table className='table'>
    <tr>
      <th>Date</th>
      <th>Weight</th>
      <th>Change</th>
    </tr>
    {(dataList || []).reverse().map((item, idx, arr) => (
      <tr>
        <td>item.createdAt</td>
        <td>item.value</td>
        <td>
          <ChangeInPercentage
            current={item.value}
            previous={arr[idx + 1] ? arr[idx + 1].value : 0}
          />
        </td>
      </tr>
    ))}
  </table>
);

export default Table;
