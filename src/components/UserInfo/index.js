import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadUserInfo } from '../../redux/actions/userInfoActions';
import UserInfoItem from '../UserInfoItem';

import './style.scss';

const UserInfo = () => {
  const userInfo = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUserInfo());
  }, [dispatch]);

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
