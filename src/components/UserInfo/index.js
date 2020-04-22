import React from 'react';
import UserInfoItem from '../UserInfoItem';

import './style.scss';

const UserInfo = ({ userInfo }) => {
  let userData = [];

  for (let key in userInfo) {
    if (userInfo[key].value) {
      userData.push({ key, ...userInfo[key] });
    }
  }

  return (
    <div className='user-info'>
      <h1 className='heading-1 heading-1--center user-info__title'>
        Personal Information
      </h1>
      {userData.map((userItem) => (
        <UserInfoItem
          key={userItem.key}
          label={userItem.key}
          value={userItem.value}
          previous={userItem.previous}
          unit={userItem.unit}
        />
      ))}
    </div>
  );
};

export default UserInfo;
