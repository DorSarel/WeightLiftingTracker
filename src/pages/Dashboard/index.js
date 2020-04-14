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
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (!userInformation) {
      dispatch(loadUserInfo(auth.uid));
    }
  }, [dispatch, userInformation, auth.uid]);

  return !userInformation ? (
    <h1>Spinner</h1>
  ) : (
    <div className='dashboard'>
      <Sidenav userInfo={userInformation} />
      <UserInfo userInfo={userInformation} />
      <UserActions userInfo={userInformation} uid={auth.uid} />
    </div>
  );
};

export default Dashboard;
