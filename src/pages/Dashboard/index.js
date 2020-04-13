import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import UserInfo from '../../components/UserInfo';
import UserActions from '../../components/UserActions';
import Sidenav from '../../components/Sidenav';
import './style.scss';

import { loadUserInfo } from '../../redux/actions/userInfoActions';

const Dashboard = () => {
  // redux
  const dispatch = useDispatch();
  const userInformation = useSelector(({ userInfo }) => userInfo);

  useEffect(() => {
    dispatch(loadUserInfo());
  }, [dispatch]);

  return (
    <div className='dashboard'>
      <Sidenav />
      {userInformation ? (
        <UserInfo userInfo={userInformation} />
      ) : (
        <h1>Spinner</h1>
      )}
      <UserActions userInfo={userInformation} />
    </div>
  );
};

export default Dashboard;
