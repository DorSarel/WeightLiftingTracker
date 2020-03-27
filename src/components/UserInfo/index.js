import React, { useContext } from 'react';
import UserInfoItem from '../UserInfoItem';
import { UserContext } from '../../contexts/UserContext';

import './style.scss';

const UserInfo = () => {
  const { user } = useContext(UserContext);
  const { personal_info: userInfo } = user || {};
  let userData = [];

  for (let key in userInfo) {
    userData.push(
      <UserInfoItem
        key={key}
        label={key}
        value={userInfo[key].value}
        unit={userInfo[key].unit}
      />
    );
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
