import React, { useContext } from 'react';
import UserInfoItem from '../UserInfoItem';
import { UserContext } from '../../contexts/UserContext';

import './style.scss';

const UserInfo = () => {
  const { state } = useContext(UserContext);
  const { personal_info: userInfo } = state;
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
  return <div className='user-info'>{userData}</div>;
};

export default UserInfo;
