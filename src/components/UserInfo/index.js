import React from 'react';
import UserInfoItem from '../UserInfoItem';

import './style.scss';

const UserInfo = ({ userInfo }) => {
  let userData = [];

  for (let key in userInfo) {
    if (userInfo[key].value) {
      userData.push(
        <UserInfoItem
          key={key}
          label={key}
          value={userInfo[key].value}
          unit={userInfo[key].unit}
        />
      );
    }
  }

  return (
    <div className='user-info'>
      <h1 className='heading-1 heading-1--center user-info__title'>
        Personal Information
      </h1>
      {userData}
    </div>
  );
};

export default UserInfo;
