import React from 'react';
import ChangeInPercentage from '../ChangeInPercentage';
import PropTypes from 'prop-types';

const UserInfoItem = ({ label, value, previous, unit = '' }) => (
  <div className='user-info__item'>
    <p className='user-info__value'>{`${value}${unit}`}</p>
    <p className='user-info__key'>{label}</p>
    <ChangeInPercentage current={value} previous={previous} />
  </div>
);

UserInfoItem.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  previous: PropTypes.any,
  unit: PropTypes.string,
};

export default UserInfoItem;
