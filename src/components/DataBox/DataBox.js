import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const DataBox = ({ prefix, value, unit = '', additionlClass = '' }) => {
  let wrapperClass = 'data-box';
  if (additionlClass) {
    wrapperClass += ' ' + additionlClass;
  }
  return (
    <div className={wrapperClass}>
      <p className='data-box__prefix'>{`${prefix}:`}</p>
      <p className='data-box__data'>{`${value}${unit}`}</p>
    </div>
  );
};

DataBox.propTypes = {
  prefix: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  unit: PropTypes.string,
};

export default DataBox;
