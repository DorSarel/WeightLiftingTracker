import React from 'react';

const Box = ({ prefix, value, unit }) => (
  <div className='detailed-weight__box'>
    <p className='detailed-weight__prefix'>{`${prefix}:`}</p>
    <p className='detailed-weight__data'>{`${value}${unit}`}</p>
  </div>
);

export default Box;
