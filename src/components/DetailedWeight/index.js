import React from 'react';
import Box from './Box';
import './style.scss';

const DetailedWeight = () => {
  return (
    <div className='detailed-weight'>
      <h2 className='detailed-weight__title'>HPC</h2>
      <Box prefix='current' value='80' unit='kg' />
      <Box prefix='current' value='80' unit='kg' />
      <Box prefix='current' value='80' unit='kg' />
      <Box prefix='current' value='80' unit='kg' />
    </div>
  );
};

export default DetailedWeight;
