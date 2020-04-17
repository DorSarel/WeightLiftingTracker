import React from 'react';
import Icons from '../../assets/sprite.svg';
import PropTypes from 'prop-types';

const UserInfoItem = ({ label, value, previous, unit = '' }) => {
  return (
    <div className='user-info__item'>
      <p className='user-info__value'>{`${value}${unit}`}</p>
      <p className='user-info__key'>{label}</p>
      <div className='user-info__change'>
        <svg className='user-info__icon'>
          <use xlinkHref={`${Icons}#icon-triangle-up`} />
        </svg>
        <p className='user-info__percentage'>0.5%</p>
      </div>
    </div>
  );
};

UserInfoItem.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  previous: PropTypes.any,
  unit: PropTypes.string,
};

export default UserInfoItem;
