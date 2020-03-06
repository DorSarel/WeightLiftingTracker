import React from 'react';

const UserData = ({ label, value, unit = '' }) => {
  return (
    <div className='user__info'>
      <span className='user__value'>{`${value}${unit}`}</span>
      <span className='user__key'>{label}</span>
    </div>
  );
};

export default UserData;
